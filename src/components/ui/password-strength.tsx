import React from 'react';
import { Progress } from './progress';

interface PasswordStrengthIndicatorProps {
  strength: number;
  errors: string[];
}

export function PasswordStrengthIndicator({ strength, errors }: PasswordStrengthIndicatorProps) {
  const getStrengthColor = (strength: number) => {
    if (strength <= 1) return 'bg-red-500';
    if (strength <= 2) return 'bg-orange-500';
    if (strength <= 3) return 'bg-yellow-500';
    if (strength <= 4) return 'bg-lime-500';
    return 'bg-green-500';
  };

  const getStrengthText = (strength: number) => {
    if (strength <= 1) return 'Very Weak';
    if (strength <= 2) return 'Weak';
    if (strength <= 3) return 'Medium';
    if (strength <= 4) return 'Strong';
    return 'Very Strong';
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs">
        <span className="text-muted-foreground">Password Strength:</span>
        <span className={strength > 0 ? getStrengthColor(strength).replace('bg-', 'text-') : 'text-muted-foreground'}>
          {getStrengthText(strength)}
        </span>
      </div>
      <Progress 
        value={strength * 20} 
        className={`h-1 ${strength > 0 ? getStrengthColor(strength) : 'bg-muted'}`} 
      />
      {errors.length > 0 && (
        <ul className="text-xs text-red-500 list-disc list-inside">
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
    </div>
  );
}