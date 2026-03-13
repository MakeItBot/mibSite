import { cn } from "@/lib/utils";
import { Skeleton } from "./skeleton";

interface CardSkeletonProps {
  className?: string;
  hasImage?: boolean;
  lines?: number;
}

export function CardSkeleton({ 
  className, 
  hasImage = true, 
  lines = 3 
}: CardSkeletonProps) {
  return (
    <div className={cn("rounded-2xl overflow-hidden bg-card border border-border", className)}>
      {hasImage && (
        <Skeleton className="aspect-video w-full" />
      )}
      <div className="p-6 space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-6 w-3/4" />
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton 
            key={i} 
            className={cn("h-4", i === lines - 1 ? "w-1/2" : "w-full")} 
          />
        ))}
      </div>
    </div>
  );
}

interface AvatarSkeletonProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function AvatarSkeleton({ size = "md", className }: AvatarSkeletonProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <Skeleton className={cn("rounded-full", sizeClasses[size], className)} />
  );
}

interface TextSkeletonProps {
  lines?: number;
  className?: string;
}

export function TextSkeleton({ lines = 3, className }: TextSkeletonProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton 
          key={i} 
          className={cn(
            "h-4",
            i === lines - 1 ? "w-2/3" : "w-full"
          )} 
        />
      ))}
    </div>
  );
}

interface TestimonialSkeletonProps {
  className?: string;
}

export function TestimonialSkeleton({ className }: TestimonialSkeletonProps) {
  return (
    <div className={cn("p-8 rounded-2xl glass", className)}>
      <Skeleton className="h-8 w-8 mb-6" />
      <div className="space-y-2 mb-6">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <div className="flex items-center gap-4">
        <AvatarSkeleton />
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>
    </div>
  );
}
