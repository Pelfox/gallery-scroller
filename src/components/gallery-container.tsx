import { GalleryImage } from './ui/gallery-image.tsx';

interface GalleryContainerProps {
  images: string[];
  activeImageIndex: number;
}

export function GalleryContainer({ images, activeImageIndex }: GalleryContainerProps) {
  return (
    <div className="flex items-center justify-center mb-4">
      {images.map((image, index) => (
        <div key={image} className={index === activeImageIndex ? 'block' : 'hidden'}>
          <span className="block text-center mb-4 text-xl font-semibold">
            Картинка {index + 1} из {images.length}
          </span>
          <GalleryImage aria-label="Активная картинка" alt={`Картинка ${index + 1}`} src={image} />
        </div>
      ))}
    </div>
  );
}
