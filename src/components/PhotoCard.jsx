function PhotoCard({ photo }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-48 object-cover"
      />

      <div className="p-3 flex justify-between items-center">
        <p className="text-sm font-medium">{photo.author}</p>

        <button className="text-gray-400 text-lg">♥</button>
      </div>
    </div>
  );
}

export default PhotoCard;
