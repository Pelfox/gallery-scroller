import { ArrowBigLeftIcon, ArrowBigRightIcon } from 'lucide-react';
import { ControlButton } from './ui/control-button.tsx';

interface ControlsContainerProps {
  changeImage: (direction: 'next' | 'previous') => void;
}

export function ControlsContainer({changeImage}: ControlsContainerProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <ControlButton
        aria-label="Следующая картинка"
        type="button"
        onClick={() => changeImage('previous')}
      >
        <ArrowBigLeftIcon />
      </ControlButton>
      <ControlButton
        aria-label="Предыдущая картинка"
        type="button"
        onClick={() => changeImage('next')}
      >
        <ArrowBigRightIcon />
      </ControlButton>
    </div>
  )
}