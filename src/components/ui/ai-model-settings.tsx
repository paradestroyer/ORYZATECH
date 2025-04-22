import React from 'react';
import { useAIConfigContext } from '@/hooks/use-ai-context';
import { Switch } from './switch';
import { Label } from './label';
import { Card, CardContent, CardHeader, CardTitle } from './card';

export function AIModelSettings() {
  const { config, updateConfig } = useAIConfigContext();

  const handleToggleModel = (enabled: boolean) => {
    updateConfig({ enabled });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Model Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <Switch
            id="claude-enabled"
            checked={config.enabled}
            onCheckedChange={handleToggleModel}
          />
          <Label htmlFor="claude-enabled">
            Enable Claude 3.5 Sonnet
          </Label>
        </div>
        {config.enabled && (
          <p className="text-sm text-muted-foreground mt-2">
            Using Claude 3.5 Sonnet model for enhanced AI capabilities
          </p>
        )}
      </CardContent>
    </Card>
  );
}