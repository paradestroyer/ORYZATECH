import { createContext } from 'react';
import type { AIConfig } from '@/lib/config/ai';

export interface AIConfigContextType {
  config: AIConfig;
  updateConfig: (config: Partial<AIConfig>) => void;
}

export const AIConfigContext = createContext<AIConfigContextType>({
  config: {
    model: "claude-3-sonnet",
    enabled: true
  },
  updateConfig: () => {}
});