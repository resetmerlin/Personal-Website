import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header
            id="header"
            className="flex w-full items-center justify-center	bg-black font-sans text-white "
        >
            <Link
                to="https://publish.obsidian.md/resetmerlin"
                className="h-3/6"
                target="_blank"
            >
                <img
                    src="./obsidian-icon.png"
                    alt="icon"
                    className="header__logo h-full rounded-full	p-1 duration-300 ease-in hover:border-white"
                />
            </Link>
        </header>
    )
}
