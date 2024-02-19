import { LoadingOverlay, Tabs } from '@mantine/core'
import React from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { Details, Main, Rewards, Verification } from '..'
import { EditProjectButtons } from './edit-project-buttons'
import { pb } from 'shared/api'
import { useQuery } from '@tanstack/react-query'

const EditProjectContext = React.createContext(null)

export const EditProjectTabs = () => {

  const { pathname } = useLocation()
  const { id } = useParams()
  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()

  const tabValue = 
    ((searchParams.get('tab') === `details`) && `details`) ||
    ((searchParams.get('tab') === `rewards`) && `rewards`) ||
    ((searchParams.get('tab') === `verification`) && `verification`) ||
    ((searchParams.get('tab') === `incubator`) && `incubator`) || `edit`

  function handleTabChange (value) {
    if (value === 'edit') return navigate(`/project/${id}/edit`)
    return setSearchParams({
      tab: value
    })
  }

  const [project, setProject] = React.useState({})

  async function getProject () {
    await pb.collection('projects').getOne(id, {expand: 'user'})
  }

  async function getRewards () {
    await pb.collection('rewards').getList(1, 10, {filter: `project = ${id}`})
  }

  return (
    <div className="container h-full">
      <div className='flex flex-col h-full'>
        <Tabs
          value={`${tabValue}`}
          onChange={(value) => handleTabChange(value)}
          variant='default'
          radius='md'
          classNames={{
            tabLabel: 'text-base font-medium',
            // tabsList: 'wrapper'
          }}
          className='grow'
        >
          <Tabs.List>
            <Tabs.Tab value={`edit`}>Основные данные</Tabs.Tab>
            <Tabs.Tab value={`details`}>Детали</Tabs.Tab>
            <Tabs.Tab value={`rewards`}>Вознаграждения</Tabs.Tab>
            <Tabs.Tab value={`verification`}>Верификация</Tabs.Tab>
            <Tabs.Tab value={`incubator`}>Бизнес-инкубатор</Tabs.Tab>  
          </Tabs.List>
          <Tabs.Panel value={tabValue} pt='md'>
            <EditProjectContext.Provider>
              {tabValue === 'details' && <Details/>}
              {tabValue === 'rewards' && <Rewards/>}
              {tabValue === 'verification' && <Verification/>}
              {tabValue === 'edit' && <Main/>}
            </EditProjectContext.Provider>
          </Tabs.Panel>
        </Tabs>
        <EditProjectButtons/>
      </div>
    </div>
  )
}
