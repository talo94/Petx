import React from 'react';
import { ImageCard, ImageWrapper, Card } from './styles';
import { useNearScreen } from '../../hooks/useNearScreen';
import { FavButton } from '../FavButton';
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation';
import { Link } from '../Category/styles';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518001589401-1743b61d1def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen();
  return (
    <Card ref={ref}>
      {show && (
        <>
          <ImageWrapper>
            <Link to={`/detail/${id}`}>
              <ImageCard src={src} />
            </Link>
          </ImageWrapper>
          <ToggleLikeMutation>
            {
            (toggleLike) => {
              const handleFavClick = () => {
                toggleLike({
                  variables: {
                    input: { id }
                  }
                });
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
