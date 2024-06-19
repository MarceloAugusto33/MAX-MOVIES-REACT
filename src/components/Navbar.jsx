import { Link, useNavigate } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import { useState } from "react"

export default function Navbar() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!search) return

        navigate(`/search?q=${search}`);
        setSearch("");
    }

    return (
        <nav className="bg-gray-900 p-4 flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-orange-400 text-2xl font-bold mb-4 md:mb-0">
                <Link to="/" className="flex items-center">
                    <BiCameraMovie className="mr-2" />
                    MAX MOVIES
                </Link>
            </h2>
            <form onSubmit={handleSubmit} className="flex items-center w-full md:w-auto gap-3">
                <input
                    type="text"
                    placeholder="Busque um filme"
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                    className="p-2 w-full md:w-64 bg-gray-800 text-white rounded-md focus:outline-none "
                />
                <button
                    type="submit"
                    className="p-2 bg-orange-400 text-gray-900 rounded hover:bg-orange-500"
                >
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    );
}