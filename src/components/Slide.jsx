import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import 'swiper/css'
import 'swiper/css/pagination'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
const imageURL = import.meta.env.VITE_IMAGE_BASE_URL

export const Slide = () => {
    const [movies, setMovies] = useState([]);

    async function fetchMovies() {
        const response = await fetch(`${moviesURL}popular?${apiKey}`);
        const data = await response.json();
        return data
    }

    useEffect(() => {
        async function getMovieImages() {
            const response = await fetchMovies();

            setMovies(response.results.slice(0, 5).map(movie => {
                return {
                    title: movie.title,
                    image: imageURL + movie.backdrop_path
                }
            }));
        }

        getMovieImages();
    }, [])

    return (
        <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="md:h-[500px] h-[300px] relative"
        >
            {
                movies.map((movie, index) => (
                    <SwiperSlide key={index} className="relative">
                        <img src={movie.image} className="w-full h-full object-cover" alt="Imagem do filme" />
                        <h1 className="absolute bottom-4 left-4 md:bottom-10 md:left-10 md:text-4xl text-2xl text-white font-bold bg-black bg-opacity-50 p-2 rounded">
                            {movie.title}
                        </h1>
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};