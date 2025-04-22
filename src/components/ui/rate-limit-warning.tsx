import React from 'react';
import { Clock } from 'lucide-react';
import { Progress } from './progress';
import { Alert, AlertDescription } from './alert';

interface RateLimitWarningProps {
  requestsRemaining: number;
  maxRequests: number;
  resetInSeconds?: number;
}

export function RateLimitWarning({ requestsRemaining, maxRequests, resetInSeconds }: RateLimitWarningProps) {
  const percentage = (requestsRemaining / maxRequests) * 100;
  const isLowOnRequests = requestsRemaining < 3;

  return (
    <Alert 
      variant={isLowOnRequests ? "destructive" : "default"} 
      className="mb-4"
    >
      <Clock className="h-4 w-4" />
      <AlertDescription className="ml-2">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-sm">
            <span>API Requests Remaining</span>
            <span>{requestsRemaining}/{maxRequests}</span>
          </div>
          <Progress value={percentage} className="h-1" />
          {resetInSeconds && resetInSeconds > 0 && (
            <p className="text-xs text-muted-foreground">
              Rate limit resets in {Math.ceil(resetInSeconds)} seconds
            </p>
          )}
        </div>
      </AlertDescription>
    </Alert>
  );
}