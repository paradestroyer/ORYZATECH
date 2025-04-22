import { APIError } from '@/lib/errors';
import { APICache } from '@/lib/utils/api-cache';

interface ClaudeRequest {
  model: string;
  prompt: string;
  temperature?: number;
  maxTokens?: number;
}

interface ClaudeResponse {
  text: string;
}

function generateCacheKey(request: ClaudeRequest): string {
  return `claude:${request.model}:${request.prompt}:${request.temperature ?? 0.7}:${request.maxTokens ?? 1000}`;
}

export async function handleClaudeRequest(request: ClaudeRequest): Promise<ClaudeResponse> {
  const CLAUDE_API_KEY = import.meta.env.VITE_CLAUDE_API_KEY;
  const CLAUDE_API_URL = import.meta.env.VITE_CLAUDE_API_URL || 'https://api.anthropic.com/v1/messages';

  if (!CLAUDE_API_KEY) {
    throw new APIError(
      'Claude API key is not configured. Please add your API key to the environment variables.',
      401,
      'MISSING_API_KEY'
    );
  }

  const cacheKey = generateCacheKey(request);

  try {
    return await APICache.withCache<ClaudeResponse>(
      cacheKey,
      async () => {
        const response = await fetch(CLAUDE_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': CLAUDE_API_KEY,
            'anthropic-version': '2024-01-01'
          },
          body: JSON.stringify({
            model: request.model,
            messages: [
              {
                role: 'user',
                content: request.prompt
              }
            ],
            max_tokens: request.maxTokens ?? 1000,
            temperature: request.temperature ?? 0.7
          })
        });

        if (!response.ok) {
          let errorMessage = `Failed to get response from Claude API: ${response.status} ${response.statusText}`;
          
          try {
            const errorData = await response.json();
            if (errorData.error) {
              errorMessage = errorData.error.message || errorMessage;
            }
          } catch {
            // If we can't parse the error JSON, use the default message
          }

          throw APIError.fromResponse(response, errorMessage);
        }

        const data = await response.json();
        if (!data.content?.[0]?.text) {
          throw new APIError(
            'Invalid response format from Claude API',
            500,
            'INVALID_RESPONSE'
          );
        }

        return {
          text: data.content[0].text
        };
      }
    );
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    
    throw new APIError(
      error instanceof Error ? error.message : 'Failed to communicate with Claude API',
      500,
      'API_ERROR'
    );
  }
}