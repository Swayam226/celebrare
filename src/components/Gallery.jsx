import PhotoCard from "./PhotoCard";
import useFetchPhotos from "../hooks/useFetchPhotos";

function Gallery() {
  const { photos, loading, error } = useFetchPhotos();

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
