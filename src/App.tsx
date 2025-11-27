import { useState } from 'react';
import { ControlsContainer } from './components/controls-container.tsx';
import { GalleryContainer } from './components/gallery-container.tsx';
import './App.css';

const images = [
  'https://cataas.com/cat?id=1',
  'https://cataas.com/cat?id=2',
  'https://cataas.com/cat?id=3',
];

function App() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  function changeImage(direction: 'next' | 'previous') {
    const isLastImage = activeImageIndex === images.length - 1;
    const isFirstImage = activeImageIndex === 0;

    let newImageIndex;
    if (direction === 'next') {
      newImageIndex = isLastImage ? 0 : activeImageIndex + 1;
    } else {
      newImageIndex = isFirstImage ? images.length - 1 : activeImageIndex - 1;
    }
    setActiveImageIndex(newImageIndex);
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center px-4">
      <GalleryContainer images={images} activeImageIndex={activeImageIndex} />
      <ControlsContainer changeImage={changeImage} />
      <div className="absolute bottom-4 text-xs text-neutral-600 flex gap-1">
        <p>Картинки предоставлены сервисом</p>
        <a
          href="https://cataas.com/"
          className="hover:text-black transition-colors underline underline-offset-4"
        >
          CATAAS
        </a>
      </div>
    </div>
  );
}

export default App;
