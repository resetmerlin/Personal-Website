import { createHashRouter } from 'react-router-dom'
import { HomePage } from '../page/home'
import { ProjectPage } from '../page/project'
import { AboutPage } from '../page/about'

const router = createHashRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
    {
        path: '/project',
        element: <ProjectPage />,
    },
])

export default router
