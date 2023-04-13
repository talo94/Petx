import React from 'react';
import { ImageCard, ImageWrapper, Card } from './styles';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';
import { FavButton } from '../FavButton';
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518001589401-1743b61d1def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const keyLike = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(keyLike, false);
  const [show, ref] = useNearScreen();

  return (
    <Card ref={ref}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImageWrapper>
              <ImageCard src={src} />
            </ImageWrapper>
          </a>
          <ToggleLikeMutation>
            {
            (toggleLike) => {
              const handleFavClick = () => {
                !liked && toggleLike({
                  variables: {
                    input: { id }
                  }
                });
                setLiked(!liked);
              };
              return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />;
            }
            }
          </ToggleLikeMutation>
        </>
      )}
    </Card>
  );
};
