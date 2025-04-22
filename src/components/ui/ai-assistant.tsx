import React, { useState, useEffect } from 'react';
import { AlertCircle, Loader2, Send, XCircle } from 'lucide-react';
import { Button } from './button';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Input } from './input';
import { Alert, AlertDescription, AlertTitle } from './alert';
import { RateLimitWarning } from './rate-limit-warning';
import { useClaude } from '@/hooks/use-claude';
import { APIError } from '@/lib/errors';
import { APICache, API_RATE_LIMITS } from '@/lib/utils/api-cache';

const CLAUDE_CACHE_KEY = 'claude:requests';

export function AIAssistant() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState<{ title: string; message: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [rateLimitInfo, setRateLimitInfo] = useState(() => 
    APICache.getRateLimitInfo(CLAUDE_CACHE_KEY)
  );
  const { generateResponse, isEnabled } = useClaude();

  // Update rate limit info periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setRateLimitInfo(APICache.getRateLimitInfo(CLAUDE_CACHE_KEY));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || !isEnabled) return;

    setError(null);
    setIsLoading(true);

    try {
      const result = await generateResponse(prompt);
      setResponse(result.text);
      setPrompt('');
      // Rate limit info will be updated automatically by the interval
    } catch (err) {
      if (err instanceof Error) {
        const message = err.message;
        if (message.includes('Rate limit exceeded')) {
          setError({
            title: 'Rate Limit Reached',
            message: 'Please wait for the rate limit to reset before trying again.'
          });
        } else if (err instanceof APIError) {
          setError({
            title: err.code === 'MISSING_API_KEY' ? 'Configuration Required' : 'API Error',
            message: err.message
          });
        } else {
          setError({
            title: 'Unexpected Error',
            message: message
          });
        }
      } else {
        setError({
          title: 'Unexpected Error',
          message: 'An unexpected error occurred'
        });
      }
    } finally {
      setIsLoading(false);
      // Update rate limit info immediately after request
      setRateLimitInfo(APICache.getRateLimitInfo(CLAUDE_CACHE_KEY));
    }
  };

  const handleDismissError = () => {
    setError(null);
  };

  if (!isEnabled) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Assistant (Claude 3.5 Sonnet)</CardTitle>
      </CardHeader>
      <CardContent>
        <RateLimitWarning {...rateLimitInfo} />
        
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle className="ml-2">{error.title}</AlertTitle>
            <AlertDescription className="ml-6">{error.message}</AlertDescription>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto h-4 w-4 -translate-y-1"
              onClick={handleDismissError}
            >
              <XCircle className="h-4 w-4" />
            </Button>
          </Alert>
        )}
        
        {response && (
          <div className="mb-4 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{response}</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask me anything about farming..."
            disabled={isLoading || rateLimitInfo.requestsRemaining === 0}
            className="flex-1"
          />
          <Button 
            type="submit" 
            disabled={isLoading || !prompt.trim() || rateLimitInfo.requestsRemaining === 0}
            variant="default"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}