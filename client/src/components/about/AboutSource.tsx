import { Link } from 'react-router-dom'
import './About.css'

interface IProps {
    github: URL | string
    obsidian: URL | string
}

export default function AboutSource({ github, obsidian }: IProps) {
    return (
        <div className="mt-2 flex">
            <Link to={github} target="_blank">
                <i className="bx bxl-github text-5xl " />
            </Link>

            <Link to={obsidian} target="_blank">
                <img
                    src="./obsidian-icon.png"
                    alt="icon"
                    className="h-14 w-14"
                />
            </Link>
        </div>
    )
}
