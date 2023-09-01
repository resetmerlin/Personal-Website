import { PropsWithChildren } from 'react'

export default function EarthGroup({ children }: PropsWithChildren) {
    return (
        // eslint-disable-next-line react/no-unknown-property
        <group dispose={null}>
            <group scale={0.018}>{children}</group>
        </group>
    )
}
