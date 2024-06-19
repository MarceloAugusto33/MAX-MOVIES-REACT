import { Swiper, SwiperSlide, } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import { Link } from "react-router-dom";

const imageURL = import.meta.env.VITE_IMG

export const SlideFilmes = ({ movies }) => {
    return (
        <Swiper
            modules={[FreeMode, Navigation]}
            spaceBetween={30}
            navigation
            slidesPerView='auto'
            freeMode
        >
            {
                movies.map((movie, index) => (
                    <SwiperSlide key={index} className="w-fit py-10">
                        <Link to={`/movie/${movie.id}`} className="no-underline">
                            <img
                                src={imageURL + movie.poster_path}
                                alt="Poster do filme"
                                className="object-contain rounded-md md:h-80 h-56"
                            />
                        </Link>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};