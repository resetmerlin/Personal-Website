import { PropsWithChildren } from 'react'
import { TNormalElementProps } from '../../types/element-props'
import './About.css'

export default function AboutItem({
    children,
    className,
}: PropsWithChildren<TNormalElementProps<HTMLDivElement>>) {
    return (
        <section className="mt-1.5 h-full w-full snap-center" id="slider">
            <div
                className={`${className} mt-1.5 flex h-full w-full 	items-center justify-evenly	overflow-hidden`}
            >
                {children}
            </div>
        </section>
    )
}
