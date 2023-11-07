import React from 'react'
import portada from "../assets/portada.jpg"

function MovieCard() {
  return (
      <article className="moviecard">
          <h3>Titulo Pelicula</h3>
          <div className="moviecard-image">
              
              <img src={portada} alt="" />
          
          </div>
          <p>Descripcion</p>
      </article>
  )
}

export default MovieCard