import { Link } from 'react-router-dom'

interface IProps {
    github: ''
    obsidian: ''
}

export default function Resources({ github = '/', obsidian = '/' }: IProps) {
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
