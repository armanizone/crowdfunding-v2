import React from 'react'
import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { NavigationProgress } from '@mantine/nprogress'
import { Outlet } from 'react-router'
import { AuthModal } from 'widgets/auth-modal'

export const AppProvider = () => {
  return (
    <MantineProvider theme={{
      defaultRadius: 'md'
    }}>
      <ModalsProvider modals={{ auth: AuthModal}}>
        <Outlet/>
        <Notifications position='top-right'/>
        <NavigationProgress/>
      </ModalsProvider>
    </MantineProvider>
  )
}
