export interface AIConfig {
  model: string;
  enabled: boolean;
}

export const defaultAIConfig: AIConfig = {
  model: "claude-3-sonnet",
  enabled: true
};

let currentConfig = { ...defaultAIConfig };

export const getAIConfig = () => currentConfig;

export const updateAIConfig = (config: Partial<AIConfig>) => {
  currentConfig = { ...currentConfig, ...config };
  return currentConfig;
};

// Initialize with Claude 3.5 Sonnet enabled for all clients
updateAIConfig({ model: "claude-3-sonnet", enabled: true });