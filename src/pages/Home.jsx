import { useState, useEffect } from "react";
import { MoviesContainer } from "../components/MoviesContainer";
import { Slide } from "../components/Slide";

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
    const [moviesTopRated, setmoviesTopRated] = useState([]);
    const [moviesNow, setmoviesNow] = useState([]);
    const [moviesPopular, setMoviesPopular] = useState([]);
    const [moviesUnComing, setmoviesUnComing] = useState([]);

    const fetchMovies = async (url) => {
        const res = await fetch(url);
        return await res.json();
    };

    useEffect(() => {

        const getMovies = async () => {
            const [tops, nows, populars, uncomings] = await Promise.all([
                fetchMovies(`${moviesURL}top_rated?${apiKey}`),
                fetchMovies(`${moviesURL}now_playing?${apiKey}`),
                fetchMovies(`${moviesURL}popular?${apiKey}`),
                fetchMovies(`${moviesURL}upcoming?${apiKey}`),
            ]);

            setmoviesTopRated(tops.results)
            setmoviesNow(nows.results)
            setMoviesPopular(populars.results)
            setmoviesUnComing(uncomings.results)
        }

        getMovies();
    }, [])

    return (
        <div className="w-full text-secondary pb-10">

            {
                moviesNow.length === 0 && (
                    <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 border-solid"></div>
                    </div>
                )
            }

            <Slide />
            <main className="mt-10 md:px-20 px-5">
                <MoviesContainer
                    title="Lançamentos"
                    movies={moviesNow}
                />

                <MoviesContainer
                    title="Proximos lançamentos"
                    movies={moviesUnComing}
                />

                <MoviesContainer 
                    title="Populares do momento"
                    movies={moviesPopular}
                />
                <MoviesContainer
                    title="Bem avaliados"
                    movies={moviesTopRated}
                />
            </main>
        </div>
    );
};

export default Home;