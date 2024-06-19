import { SlideFilmes } from "./SlideFilmes"

export const MoviesContainer = ({ movies, title }) => {
    return (
        <>
            <h2 className="text-orange-400 font-bold text-3xl mb-2">{title}</h2>
            <aside className="w-full">
                <SlideFilmes movies={movies} />
            </aside>
        </>
    )
}