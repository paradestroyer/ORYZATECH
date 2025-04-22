import React, { type ReactNode } from 'react';
import { useAIConfig } from '@/hooks/use-ai-config';
import { AIConfigContext } from './context';

export function AIConfigProvider({ children }: { children: ReactNode }) {
  const aiConfig = useAIConfig();
  return (
    <AIConfigContext.Provider value={aiConfig}>
      {children}
    </AIConfigContext.Provider>
  );
}