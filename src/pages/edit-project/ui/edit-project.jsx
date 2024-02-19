import { Tabs } from '@mantine/core'
import React from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router'
import { EditProjectTabs } from 'widgets/edit-project-tabs'

export const EditProject = () => {

  return (
    <div className='w-full h-full'>
      <EditProjectTabs/>
    </div>
  )
}
