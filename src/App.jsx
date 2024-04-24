import { useRef } from 'react';
import ImageLoader from './components/ImageLoader';
import ImageContainer from './components/ImageContainer';
import useFetchPhotos from './hooks/useFetchPhotos';
import useInfiniteScroll from './hooks/useInfiniteScroll';

const App = () => {
  const { photos, loading, fetchPhotos } = useFetchPhotos();
  const loaderRef = useRef(null);

  useInfiniteScroll(loaderRef, () => {
    if (!loading) {
      fetchPhotos();
    }
  });

  return (
    <div ref={loaderRef}>
      <h1>Unsplash API - Infinite Scroll</h1>
      {loading && <ImageLoader />}
      <ImageContainer photos={photos} />
    </div>
  );
};

export default App;
