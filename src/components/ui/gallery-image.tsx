import type { ImgHTMLAttributes } from 'react';
import { Loader2Icon } from 'lucide-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

function GalleryImageLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-neutral-50 border border-neutral-200 rounded-xl">
      <Loader2Icon className="size-6 animate-spin" />
    </div>
  );
}

interface GalleryImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

export function GalleryImage({ className, ...props }: GalleryImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="h-80 rounded-xl overflow-hidden relative">
      {isLoading && <GalleryImageLoader />}
      <img
        {...props}
        onLoad={() => setIsLoading(false)}
        className={twMerge(
          'w-full h-full object-cover transition-opacity',
          !isLoading ? 'opacity-100' : 'opacity-0',
          className,
        )}
      />
    </div>
  );
}
