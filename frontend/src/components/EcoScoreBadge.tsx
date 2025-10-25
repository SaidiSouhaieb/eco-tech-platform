import { EcoScore } from '../lib/types';
import { ecoScoreColors, ecoScoreLabels } from '../lib/mock-data';

interface EcoScoreBadgeProps {
  score: EcoScore;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export function EcoScoreBadge({ score, size = 'md', showLabel = true }: EcoScoreBadgeProps) {
  const sizeClasses = {
    sm: 'h-6 w-6 text-xs',
    md: 'h-10 w-10 text-lg',
    lg: 'h-16 w-16 text-2xl'
  };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`${sizeClasses[size]} flex items-center justify-center rounded-full font-bold text-white shadow-md`}
        style={{ backgroundColor: ecoScoreColors[score] }}
      >
        {score}
      </div>
      {showLabel && (
        <div>
          <div className="text-sm font-medium">Eco-Score</div>
          <div className="text-xs text-muted-foreground">{ecoScoreLabels[score]}</div>
        </div>
      )}
    </div>
  );
}
