import { useState, useMemo, useCallback, useReducer, useEffect } from "react";
import favouritesReducer from "../reducer/favouritesReducer";
import PhotoCard from "./PhotoCard";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import useFetchPhotos from "../hooks/useFetchPhotos";

function Gallery() {
  const { photos, loading, error } = useFetchPhotos();

  const [search, setSearch] = useState("");

  const [favourites, dispatch] = useReducer(favouritesReducer, []);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favourites")) || [];
    dispatch({ type: "INIT", payload: stored });
  }, []);

  function toggleFavourite(photo) {
    dispatch({
      type: "TOGGLE_FAV",
      payload: photo,
    });
  }

  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase()),
    );
  }, [photos, search]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <SearchBar value={search} onChange={handleSearchChange} />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            toggleFavourite={toggleFavourite}
            isFavourite={favourites.some((fav) => fav.id === photo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
