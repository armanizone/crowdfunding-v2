import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { NavigationProgress } from '@mantine/nprogress'
import { RouterProvider } from 'react-router-dom'
import { router } from './appRouter.jsx'

import './index.css'

import '@mantine/core/styles.css';
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { AuthModal } from 'widgets/auth-modal'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <ModalsProvider modals={{ auth: AuthModal}}>
        <RouterProvider router={router} />
        <Notifications position='top-right'/>
        <NavigationProgress/>
      </ModalsProvider>
    </MantineProvider>
  </React.StrictMode>,
)
