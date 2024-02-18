import React from 'react'
import { Outlet } from 'react-router'

export const Layout = ({header, footer}) => {
  return (
    <div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
      {header}
      <Outlet/>
      {footer}
    </div>
  )
}
