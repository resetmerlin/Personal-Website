import { PropsWithChildren } from 'react'
import { TNormalElementProps } from '../../types/element-props'

export default function SubNav({
    children,
    id,
}: PropsWithChildren<TNormalElementProps<HTMLSpanElement>>) {
    return (
        <span
            className="absolute	inline-block w-60  py-2.5 text-start text-2xl text-gray-500	duration-300 ease-in hover:text-white md:text-2xl sm:text-xl  max-[600px]:scale-[0.6] "
            id={`home__subtitle-${id}`}
        >
            {children}
        </span>
    )
}
