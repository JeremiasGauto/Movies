import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

function Container() {

    const [movies, setMovies] = useState([]) // useState retorna un arreglo
    const [loader, setLoader] = useState(false)
    const [page, setPage] = useState(1)



    const getMovies = async () => {
        try {

            // https://api.themoviedb.org/3/movie/popular
            const url = `${import.meta.env.VITE_URL}?language=es-ES&page=${page}` // template string 

           

            const config = {
                method: "GET", // GET POR DEFECTO  METHODS = GET,POST,PUT,DELETE,PATCH,OPTIONS
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${import.meta.env.VITE_TOKEN}`
                },
                //body:"" // para metodos PUT PATCH POST
            }
            const respuesta = await fetch(url, config)

          if (respuesta.status === 200) {
              console.log(respuesta.status)
              const datos = await respuesta.json()
              console.log(datos)
                if (movies.length === 0) {
                    setMovies(datos.results)
                    console.log(datos.results)
                } else {
                    setMovies([movies, ...datos.results])
                }

            }


        } catch (err) {
            console.log(err.message)
        }
    }

    const handleClick = (event) => {
        event.preventDefault()
        setPage(page + 1)
    }

    useEffect(() => {
        getMovies()
    }, [page]) // array de dependencias. si esta vacio se ejecuta una vez se monta el componente
    // si tiene dependencias, se va a ejecutar el USEEFFECT cada vez que cambie la/s dependencia/s



    return (
        <>
            <main className="container content" id='mimain'>
                {/* {1 === '1' ? (loader ? <p>Cargando</p> : <p>No cargando</p>) : "no es igual a 1"} */}
                {
                    movies?.map((pelicula) => {
                        return <MovieCard key={pelicula.id} pelicula={pelicula} />
                    })
                }

            </main>
            <button className='btn-seemore' onClick={handleClick}>Ver más</button>

            {loader && <p>Cargando...</p>}
        </>
    )
}

export default Container