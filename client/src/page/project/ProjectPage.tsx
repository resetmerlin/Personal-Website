import { motion } from 'framer-motion'
import { Laptop } from '../../components/laptop'
import { Layout } from '../../components/layouts'
import { Project } from '../../components/projects'
import { Subtitle, Title } from '../../components/writing'
import { Phone } from '../../components/phone'
import { IntroNav } from '../../components/introNav'
import { Three } from '../../components/three'
import { Fog } from '../../components/three/parts/fog'
import { Lights } from '../../components/three/parts'
import { Earth } from '../../components/three/object/earth/Earth'
import React from 'react'

export default function Page() {
    const introVariants = {
        show: {
            opacity: 1,
            transition: { duration: 3 },
        },
    }

    return (
        <Layout>
            <Project.Section>
                <Project.Group id="project-left" className="max-[500px]:hidden">
                    <div
                        className="relative flex justify-center rounded-full sm:translate-x-[-19rem] sm:translate-y-[6rem]	md:translate-x-[-13rem] md:translate-y-[6rem]	 lg:translate-x-[-8rem] xl:translate-x-[-7rem] 2xl:translate-x-0 2xl:translate-y-0"
                        id="earth-project"
                    >
                        <IntroNav
                            page="PROJECT"
                            id="about__title"
                            className="sm:translate-x-[-16rem] sm:translate-y-[-6rem] "
                        />
                        <div className="absolute" id="shadow" />
                        <Three.Container>
                            <Fog args={['black', 0, 60]} />
                            <Lights.Ambient />
                            <Lights.Directional />
                            <Earth.Group>
                                <Earth.Mesh />
                            </Earth.Group>
                        </Three.Container>
                    </div>
                </Project.Group>
                <Project.Group
                    id="slider-wrapper"
                    className="max-[500px]:w-full"
                >
                    <Project.Item className="h-full w-full max-[500px]:flex-col sm:flex-col	md:flex-col  xl:flex-row">
                        <Phone />
                        <motion.div
                            className="flex w-10/12		flex-col justify-center opacity-0	 lg:scale-[0.9]	xl:scale-90 2xl:scale-90   "
                            animate={['show']}
                            variants={introVariants}
                        >
                            <Title> # DLink</Title>
                            <Subtitle>
                                친목도모 대학생 매칭 서비스
                                <br /> 소속감과 공감대를 서로 이끌어내며 <br />
                                새로운 대학생 친구를 손쉽게 찾아보는 서비스
                            </Subtitle>

                            <Project.Source
                                github="https://github.com/DKU-D-Coding-teams/2023-1-Team3"
                                obsidian="https://publish.obsidian.md/resetmerlin/Merlin's+Blog/Portfolio/DLink/DLink"
                            />
                        </motion.div>
                    </Project.Item>
                    <Project.Item className="flex-col">
                        <Laptop />
                        <motion.div
                            className=" flex  h-2/5 w-10/12 flex-col justify-center 	opacity-0 2xl:scale-90 	"
                            animate={['show']}
                            variants={introVariants}
                        >
                            <Title className="sm:text-7xl	md:text-8xl">
                                # NikeSnkrs eCommerce
                            </Title>
                            <Subtitle>
                                나이키 스니커즈 샵
                                <br />
                                MERN stack, MongoDB, Express, React, Node js를
                                활용한 Nike Snkrs 샵
                                <br />
                            </Subtitle>

                            <Project.Source
                                github="https://github.com/resetmerlin/NikeSnkrs-eCommerce"
                                obsidian="https://github.com/resetmerlin/NikeSnkrs-eCommerce"
                            />
                        </motion.div>
                    </Project.Item>

                    <Project.Item className="flex-col">
                        <Laptop />
                        <motion.div
                            className=" flex  h-2/5 w-10/12 flex-col justify-center 	opacity-0 2xl:scale-90 	"
                            animate={['show']}
                            variants={introVariants}
                        >
                            <Title className="sm:text-7xl	md:text-8xl">
                                # NikeSnkrs eCommerce Next js
                            </Title>
                            <Subtitle>
                                나이키 스니커즈 샵
                                <br />
                                Next js를 사용한 NikeSnkrs eCommerce의 새로운
                                버전
                                <br />
                            </Subtitle>

                            <Project.Source
                                github="https://github.com/resetmerlin/NikSnkrs-Nextjs"
                                obsidian="https://github.com/resetmerlin/NikSnkrs-Nextjs"
                            />
                        </motion.div>
                    </Project.Item>
                </Project.Group>
            </Project.Section>
        </Layout>
    )
}
