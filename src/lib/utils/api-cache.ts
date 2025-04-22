interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

interface RateLimitEntry {
  timestamp: number;
  count: number;
}

export const API_RATE_LIMITS = {
  REQUESTS_PER_MINUTE: 10,
  WINDOW_MS: 60 * 1000,
  CACHE_TTL_MS: 5 * 60 * 1000,
} as const;

export class APICache {
  private static cache = new Map<string, CacheEntry<unknown>>();
  private static rateLimits = new Map<string, RateLimitEntry>();
  private static readonly CACHE_TTL = API_RATE_LIMITS.CACHE_TTL_MS;
  private static readonly RATE_LIMIT = API_RATE_LIMITS.REQUESTS_PER_MINUTE;
  private static readonly RATE_LIMIT_WINDOW = API_RATE_LIMITS.WINDOW_MS;
  private static maintenanceInterval?: NodeJS.Timeout;

  static startMaintenance(interval: number = 60 * 1000): void {
    if (this.maintenanceInterval) {
      clearInterval(this.maintenanceInterval);
    }

    this.maintenanceInterval = setInterval(() => {
      this.clearExpiredEntries();
    }, interval);
  }

  static stopMaintenance(): void {
    if (this.maintenanceInterval) {
      clearInterval(this.maintenanceInterval);
      this.maintenanceInterval = undefined;
    }
  }

  private static clearExpiredEntries(): void {
    const now = Date.now();
    
    // Clear expired cache entries
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp >= this.CACHE_TTL) {
        this.cache.delete(key);
      }
    }

    // Clear expired rate limit entries
    for (const [key, entry] of this.rateLimits.entries()) {
      if (now - entry.timestamp >= this.RATE_LIMIT_WINDOW) {
        this.rateLimits.delete(key);
      }
    }
  }

  static async withCache<T>(
    key: string,
    fn: () => Promise<T>,
    ttl: number = APICache.CACHE_TTL
  ): Promise<T> {
    await this.checkRateLimit(key);

    const cached = this.cache.get(key) as CacheEntry<T> | undefined;
    if (cached && Date.now() - cached.timestamp < ttl) {
      return cached.data;
    }

    const data = await fn();
    this.cache.set(key, { data, timestamp: Date.now() });
    return data;
  }

  static getRateLimitInfo(key: string): {
    requestsRemaining: number;
    maxRequests: number;
    resetInSeconds: number;
  } {
    const now = Date.now();
    const entry = this.rateLimits.get(key);

    if (!entry || now - entry.timestamp >= this.RATE_LIMIT_WINDOW) {
      return {
        requestsRemaining: this.RATE_LIMIT,
        maxRequests: this.RATE_LIMIT,
        resetInSeconds: 0
      };
    }

    const resetInSeconds = Math.ceil(
      (entry.timestamp + this.RATE_LIMIT_WINDOW - now) / 1000
    );

    return {
      requestsRemaining: Math.max(0, this.RATE_LIMIT - entry.count),
      maxRequests: this.RATE_LIMIT,
      resetInSeconds: resetInSeconds
    };
  }

  private static async checkRateLimit(key: string): Promise<void> {
    const now = Date.now();
    const entry = this.rateLimits.get(key) || { timestamp: now, count: 0 };

    if (now - entry.timestamp > this.RATE_LIMIT_WINDOW) {
      entry.timestamp = now;
      entry.count = 1;
    } else if (entry.count >= this.RATE_LIMIT) {
      const waitTime = entry.timestamp + this.RATE_LIMIT_WINDOW - now;
      throw new Error(`Rate limit exceeded. Please try again in ${Math.ceil(waitTime / 1000)} seconds.`);
    } else {
      entry.count++;
    }

    this.rateLimits.set(key, entry);
  }

  static clearCache(key?: string): void {
    if (key) {
      this.cache.delete(key);
    } else {
      this.cache.clear();
    }
  }
}