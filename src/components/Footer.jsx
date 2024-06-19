import { SiLinkedin,SiGithub  } from "react-icons/si";

export function Footer() {
    return (
        <footer className="bg-gray-900 p-10">
            <div className="flex items-center justify-center gap-10 transition-all my-4">
                <a href="/" target="_blank" className="text-3xl underline p-2 flex items-center bg-background justify-center text-white  hover:text-orange-600">
                    <SiLinkedin />
                </a>
                <a href="/" target="_blank" className="text-3xl underline p-2 flex items-center bg-background justify-center text-white hover:text-orange-600">
                    <SiGithub />
                </a>
            </div>

            <article>
                <p className="text-white font-bold text-xl text-center">By Marcelo Augusto</p>
            </article>
        </footer>
    )
}