import { PropsWithChildren } from 'react'
import { TNormalElementProps } from '../../types/element-props'
import './About.css'

export default function AboutGroup({
    children,
    className,
    id,
}: PropsWithChildren<TNormalElementProps<HTMLDivElement>>) {
    return (
        <div className={`mt-1.5 h-full w-6/12 ${className}`} id={id}>
            {children}
        </div>
    )
}
