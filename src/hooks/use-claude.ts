import { useCallback } from 'react';
import { useAIConfigContext } from './use-ai-context';
import { handleClaudeRequest } from '@/api/claude';

interface UseClaudeOptions {
  temperature?: number;
  maxTokens?: number;
}

interface ClaudeResponse {
  text: string;
}

export function useClaude(options: UseClaudeOptions = {}) {
  const { config } = useAIConfigContext();
  
  const generateResponse = useCallback(async (prompt: string): Promise<ClaudeResponse> => {
    if (!config.enabled) {
      throw new Error('Claude 3.5 Sonnet is not enabled');
    }

    try {
      return await handleClaudeRequest({
        model: config.model,
        prompt,
        temperature: options.temperature,
        maxTokens: options.maxTokens,
      });
    } catch (error) {
      console.error('Error in useClaude hook:', error);
      throw error;
    }
  }, [config.enabled, config.model, options.temperature, options.maxTokens]);

  return {
    generateResponse,
    isEnabled: config.enabled,
  };
}