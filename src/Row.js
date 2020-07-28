import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    // if [], run once when the row loads, and don't run again
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    // this line is for clicking the picture to close the youtube video if its already opened
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // movieTrailer is a npm module to RETURN the trailer URL by searching the movie's name
      // little protection here just in case the name is not defined properly
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          /* this is extracting the videoID from an url
          e.g. https://www.youtube.com/watch?v=XtMThy8QKqU&t
          it will extract the ID (v=XtMThy8QKqU&t) */
          const urlParams = new URLSearchParams(new URL(url).search);

          // get the value "v" from the URL and set as videoID
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
