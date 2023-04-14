import { PhotoCardListComponent } from '../components/PhotoCardList';
import { withPhotos } from '../hoc/withPhotos';

export const PhotoCardList = withPhotos(PhotoCardListComponent);
