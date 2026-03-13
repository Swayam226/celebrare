function PhotoCard({ photo, toggleFavourite, isFavourite }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-48 object-cover"
      />

      <div className="p-3 flex justify-between items-center">
        <p className="text-sm font-medium">{photo.author}</p>

        <button
          onClick={() => toggleFavourite(photo)}
          className={`text-lg ${isFavourite ? "text-red-500" : "text-gray-400"}`}
        >
          ♥
        </button>
      </div>
    </div>
  );
}

export default PhotoCard;
