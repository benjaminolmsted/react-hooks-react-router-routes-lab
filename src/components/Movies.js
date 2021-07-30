import React from "react";
import { movies } from "../data";

function Movies() {
  
 const renderedMovies = movies.map(movie => {
    return ( <div key={movie.title}>
      <h2>{movie.title}</h2>
      <h3>runtime {movie.time} minutes</h3>
      <ul>
        {movie.genres.map(genre=><li key={genre}>{genre}</li>)}
      </ul>
    </div>)
  })

  return <div>
          <h1>Movies Page</h1>
            {renderedMovies}
         </div>;
}

export default Movies;
