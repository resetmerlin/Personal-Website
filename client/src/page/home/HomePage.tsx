import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Layout } from '../../components/layouts'
import { Home } from '../../components/home'
import { IntroNav } from '../../components/introNav'
import { Three } from '../../components/three'
import { SubNav } from '../../components/subNav'
import { Earth } from '../../components/three/object/earth/Earth'
import { Fog } from '../../components/three/parts/fog'
import { Lights } from '../../components/three/parts'

export default function HomePage() {
    const location = useLocation().pathname
    const [latency, setLatency] = useState(false)

    useEffect(() => {
        if (latency) return

        const timer = setTimeout(() => {
            setLatency((prev) => !prev)
        }, 2000)

        // eslint-disable-next-line consistent-return
        return () => {
            clearTimeout(timer)
        }
    }, [latency])

    const subNavWords = [
        'Practical',
        'Zettelkasten',
        'Feynman Technique',
        'Web development',
        'CS',
    ]

    const fogVariants = {
        goKorea: {
            far: 60,
            color: {
                isColor: true,
                r: 0,
                g: 0,
                b: 0,
            },
            transition: { duration: 6 },
        },
    }

    const goKoreaVariants = {
        goKorea: {
            rotateX: -Math.PI / 2,
            rotateY: 0,
            rotateZ: -4.6,
            transition: { duration: 6 },
        },
    }

    const brighterVariants = {
        goKorea: {
            intensity: 20,
            transition: { duration: 6 },
        },
    }

    return (
        <Layout>
            <Home.Section>
                <div
                    className="relative flex justify-center rounded-full  "
                    id="earth-wrapper"
                >
                    <div className="absolute" id="shadow" />

                    <IntroNav page="HOME" id="home__title" />

                    <Three.Container>
                        <Fog
                            animate={[latency === true && 'goKorea']}
                            variants={fogVariants}
                        />
                        <Lights.Ambient />
                        <Lights.Directional
                            animate={[latency === true && 'goKorea']}
                            variants={brighterVariants}
                        />
                        <Earth.Group>
                            <Earth.Mesh
                                animate={[latency === true && 'goKorea']}
                                variants={goKoreaVariants}
                            />
                        </Earth.Group>
                    </Three.Container>
                    {subNavWords.map((words, id) => {
                        // eslint-disable-next-line react/no-array-index-key
                        return (
                            <SubNav key={words} id={`${id}`}>
                                {words}
                            </SubNav>
                        )
                    })}
                </div>
            </Home.Section>
        </Layout>
    )
}
