import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;
const imageURL = import.meta.env.VITE_IMG

const Search = () => {
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const query = searchParams.get("q")

    const getSeachedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        if (data.results.length == 0) return setNotFound(true)

        setMovies(data.results);
    };

    useEffect(() => {
        getSeachedMovies(`${searchUrl}?${apiKey}&query=${query}`)
    }, [query])

    return (
        <main className="p-5 md:p-20 text-white">
            {
                notFound ? (
                    <article className="h-screen flex flex-col items-center justify-center gap-5">
                        <h2 className="text-3xl font-bold text-center ">Resultado não encontrado para: {query}</h2>

                        <Link to='/' className="p-4 bg-orange-600 rounded-md shadow-md">
                            Home
                        </Link>
                    </article>
                ) :
                    movies.length === 0 ? (
                        <Loading />
                    ) : (
                        <>
                            <h2 className="text-4xl font-bold mb-12">{query}</h2>
                            <div className="grid grid-cols-2 md:grid md:grid-cols-4 gap-4">
                                {movies.map((movie, index) => (
                                    <Link to={`/movie/${movie.id}`} key={index} className="group">
                                        <img
                                            src={movie.poster_path ? imageURL + movie.poster_path : "https://ih1.redbubble.net/image.1861329778.2941/st,small,845x845-pad,1000x1000,f8f8f8.jpg"}
                                            alt={`Poster do filme ${movie.title}`}
                                            className="rounded-md max-h-96 m-auto group-hover:scale-105 transition-all duration-500"
                                        />
                                        <p className="font-bold text-center my-4">{movie.title}</p>
                                    </Link>
                                )
                                )
                                }
                            </div>
                        </>
                    )
            }
        </main>
    )
};

export default Search;