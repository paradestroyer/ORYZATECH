import { useContext } from 'react';
import { AIConfigContext, type AIConfigContextType } from '@/lib/context/context';

export function useAIConfigContext(): AIConfigContextType {
  const context = useContext(AIConfigContext);
  if (!context) {
    throw new Error('useAIConfigContext must be used within an AIConfigProvider');
  }
  return context;
}