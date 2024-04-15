import {LottieRefCurrentProps} from 'lottie-react';
import {memo, useEffect, useRef} from 'react';

import hand from './heart.json';
import {Animation, Button} from './styles';

interface Props {
  isLiked?: boolean;
  disabled?: boolean;
  onClick(): void;
}

const LikeIconComponent = (props: Props) => {
  const {disabled, isLiked, onClick} = props;

  const animationRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (isLiked) {
      animationRef.current?.play();
    } else {
      animationRef.current?.stop();
    }
  }, [isLiked]);

  const handleLike = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    isLiked ? animationRef.current?.stop() : animationRef.current?.play();
    onClick();
  };

  return (
    <>
      <Button onClick={handleLike} disabled={disabled}>
        <Animation animationData={hand} autoplay={false} loop={false} lottieRef={animationRef} />
      </Button>
    </>
  );
};

export const LikeIcon = memo(LikeIconComponent);
