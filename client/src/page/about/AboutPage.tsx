/* eslint-disable react/no-unescaped-entities */
import IntroNav from '../../components/introNav/IntroNav'
import { Layout } from '../../components/layouts'
import { About } from '../../components/about'
import { Three } from '../../components/three'
import { Fog } from '../../components/three/parts/fog'
import { Lights } from '../../components/three/parts'
import { Earth } from '../../components/three/object/earth'
import { Subtitle, Title } from '../../components/writing'

export default function AboutPage() {
    return (
        <Layout>
            <About.Section>
                <About.Group id="project-left" className="max-[500px]:hidden">
                    <div
                        className="relative flex justify-center rounded-full max-[500px]:translate-x-[-19rem] max-[500px]:translate-y-[6rem]	sm:translate-x-[-19rem] sm:translate-y-[6rem]	 md:translate-x-[-13rem] md:translate-y-[6rem] lg:translate-x-[-8rem] xl:translate-x-[-7rem] 2xl:translate-x-0  2xl:translate-y-0"
                        id="earth-project"
                    >
                        <IntroNav
                            page="ABOUT"
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
                </About.Group>
                <About.Group className="max-[500px]:w-full">
                    <About.Item className="flex-col ">
                        <img
                            src="./profile.png"
                            alt="profile"
                            className="h-96	w-96 rounded-full border-8	border-neutral-700	 object-cover p-8"
                            id="about__profile"
                        />
                        <div className="flex w-4/6 flex-col justify-center 	">
                            <Title className="sm:text-7xl	md:text-7xl">
                                Hi my name is Merlin
                            </Title>
                            <Subtitle>
                                I'm a frontend developer and currently looking
                                for a job
                                <br />I have experience launching a web service
                                with my teammates for 5 months. I also have
                                experience working with designers and backend
                                developers
                            </Subtitle>
                        </div>
                    </About.Item>
                </About.Group>
            </About.Section>
        </Layout>
    )
}
