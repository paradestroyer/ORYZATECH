import { useState, useCallback, useEffect } from 'react';
import { getAIConfig, updateAIConfig, type AIConfig } from '@/lib/config';

const AI_CONFIG_STORAGE_KEY = 'oryza:ai-config';

export const useAIConfig = () => {
  const [config, setConfig] = useState<AIConfig>(() => {
    // Try to load from localStorage first
    const stored = localStorage.getItem(AI_CONFIG_STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error('Failed to parse stored AI config:', e);
      }
    }
    return getAIConfig();
  });

  // Persist config changes to localStorage
  useEffect(() => {
    localStorage.setItem(AI_CONFIG_STORAGE_KEY, JSON.stringify(config));
  }, [config]);

  const updateConfig = useCallback((newConfig: Partial<AIConfig>) => {
    const updated = updateAIConfig(newConfig);
    setConfig(updated);
  }, []);

  return {
    config,
    updateConfig,
  };
};