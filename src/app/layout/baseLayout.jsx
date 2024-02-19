import React from 'react'
import { Notifications } from '@mantine/notifications'
import { Layout } from 'shared/ui'
import { Footer } from 'widgets/footer'
import { Header } from 'widgets/header'

export const baseLayout = (
  <Layout
    header={<Header/>}
    footer={<Footer/>}
  />
)