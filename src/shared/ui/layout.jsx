import { Notifications } from '@mantine/notifications'
import React from 'react'
import { Outlet } from 'react-router'

export const Layout = ({header, footer}) => {
  return (
    <div className='relative min-h-screen grid grid-rows-[auto_1fr_auto]'>
      {header}
      <div className='bg-slate-100 py-8'>
        <Outlet/>
      </div>
      {footer}
    </div>
  )
}
