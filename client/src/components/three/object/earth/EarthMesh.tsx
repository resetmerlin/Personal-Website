/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Euler, MeshProps, useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

type GLTFResult = GLTF & {
    nodes: {
        Sphere_Material001_0: THREE.Mesh
    }
    materials: {
        ['Material.001']: THREE.MeshStandardMaterial
    }
}

interface IProps extends MeshProps {
    // eslint-disable-next-line react/require-default-props
    rotation?: Euler
}

export default function EarthMesh({
    rotation = [-Math.PI / 1.5, 0.2, -1],
    ...props
}: IProps) {
    const { nodes, materials } = useGLTF('/earth.glb') as GLTFResult
    const myMesh = useRef()
    const location = useLocation().pathname

    useFrame(() => {
        if (location !== '/') myMesh.current.rotation.z -= 0.01
    })
    return (
        <motion.mesh
            ref={myMesh}
            {...props}
            geometry={nodes.Sphere_Material001_0.geometry}
            material={materials['Material.001']}
            rotation={rotation}
            scale={100}
        />
    )
}

useGLTF.preload('/earth.glb')
