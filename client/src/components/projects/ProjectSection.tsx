import { PropsWithChildren } from 'react'
import './Project.css'

export default function ProjectSection({ children }: PropsWithChildren) {
    return <section className="flex h-full w-full px-10">{children}</section>
}
