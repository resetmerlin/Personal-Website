import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer
            className="relative flex w-full items-center justify-between bg-black	 font-sans text-white"
            id="footer"
        >
            <div className="ml-4 flex h-full items-center justify-evenly text-center	">
                <Link
                    to="https://github.com/resetmerlin"
                    target="_blank"
                    className="flex h-full  items-center text-xs text-gray-500	"
                >
                    https://github.com/resetmerlin
                </Link>
            </div>

            <div className="center  absolute flex h-2/4	 w-72 justify-evenly	 text-center  max-[500px]:text-xl sm:text-xl	 md:text-xl	lg:text-lg 2xl:w-96">
                <Link
                    to="/"
                    className=" flex items-center duration-100 ease-out hover:border-b-4 focus:border-b-4	"
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    className=" flex items-center	duration-100 ease-out hover:border-b-4 focus:border-b-4 "
                >
                    About me
                </Link>
                <Link
                    to="/project"
                    className=" flex items-center	duration-100 ease-out hover:border-b-4 focus:border-b-4"
                >
                    Project
                </Link>
            </div>

            <div className="flex h-full w-40 justify-evenly text-center ">
                <Link
                    to="https://www.linkedin.com/in/merlin-jo-79428a272/"
                    className="mx-1.5 flex items-center text-2xl "
                    target="_blank"
                >
                    <i className="bx bxl-linkedin-square" />
                </Link>
                <Link
                    to="https://github.com/resetmerlin"
                    className="mx-1.5 flex items-center text-2xl"
                    target="_blank"
                >
                    <i className="bx bxl-github" />
                </Link>
                <Link
                    to="https://publish.obsidian.md/resetmerlin"
                    className="mx-1.5 flex items-center	text-2xl "
                    target="_blank"
                >
                    <img
                        src="./obsidian-icon-white.png"
                        alt="obsidian-white"
                        className="h-5   "
                    />
                </Link>
            </div>
        </footer>
    )
}
