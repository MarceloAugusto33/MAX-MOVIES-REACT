import { Loading } from "../components/Loading";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from 'react-icons/bs'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
const imgUrl = import.meta.env.VITE_IMG

const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null)

    const getMovie = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovie(data);
    };

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}`
        getMovie(movieUrl)
    }, [])

    const formtCurrency = (number) => {
        return number.toLocaleString('en-US', {
            style: "currency",
            currency: "USD"
        });
    }

    return (
        <div className="text-white">
            {!movie ? (
                <Loading />
            ) : (
                <main className="md:grid md:grid-cols-2 gap-2 md:p-20 text-xl p-4">
                    <img
                        src={imgUrl + movie.poster_path}
                        alt="Poster do filme"
                        className="md:col-span-1 m-auto max-h-[600px]" />

                    <article className="md:col-span-1 flex flex-col gap-3 mb-10">
                        <h1 className="text-5xl font-bold my-4 md:m-0">{movie.title}</h1>
                        <p>{movie.tagline}</p>
                        <article className="flex flex-col gap-1">
                            <h3 className="flex items-center gap-4"><BsFillFileEarmarkTextFill /> descrição:</h3>
                            <p>{movie.overview}</p>
                        </article>
                        <article className="flex flex-col gap-1">
                            <h3 className="flex items-center gap-4"><BsWallet2 /> Orçamento:</h3>
                            <p>{formtCurrency(movie.budget)}</p>
                        </article>
                        <article className="flex flex-col gap-1">
                            <h3 className="flex items-center gap-4"><BsGraphUp /> Receita:</h3>
                            <p>{formtCurrency(movie.revenue)}</p>
                        </article>
                        <article className="flex flex-col gap-1">
                            <h3 className="flex items-center gap-4"><BsHourglassSplit /> Duração:</h3>
                            <p>{movie.runtime} minutos</p>
                        </article>
                    </article>
                </main>
            )}
        </div>
    )
};

export default Movie;