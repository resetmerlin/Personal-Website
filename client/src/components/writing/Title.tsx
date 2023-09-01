import { PropsWithChildren } from 'react'
import { TNormalElementProps } from '../../types/element-props'

export default function Title({
    children,
    className,
}: PropsWithChildren<TNormalElementProps<HTMLDivElement>>) {
    return (
        <span className={`py-2.5 text-8xl font-semibold ${className}`}>
            {children}
        </span>
    )
}
