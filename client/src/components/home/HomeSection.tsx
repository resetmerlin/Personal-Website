import { PropsWithChildren } from 'react'
import './Home.css'

export default function HomeSection({ children }: PropsWithChildren) {
    return (
        <section className="flex h-full w-full items-center justify-center px-10">
            {children}
        </section>
    )
}
