import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { Home } from 'pages/home'
import { CreateProject } from 'pages/create-project'
import { About } from 'pages/about'
import { Profile } from 'pages/profile'
import { Project } from 'pages/project'
import { EditProject } from 'pages/edit-project'
import { Explore } from 'pages/explore'
import { NotFound } from 'pages/not-found'
import { baseLayout } from './layout/baseLayout'
import { AppProvider } from './appProvider'
import { Details, Main, Rewards, Verification } from 'widgets/edit-project-tabs'

export const router = createBrowserRouter([
  {
    element: <AppProvider/>,
    children: [
      {
        element: baseLayout, 
        children: [
          { path: '/', element: <Home/>},
          { path: '/create', element: <CreateProject/>},
          // { path: '/incubator', element: <Incubator3/>},
          { 
            path: '/about', element: <About/>
          },
          {
            path: '/explore', element: <Explore/>,
            // children: [
            //   {path: 'collection/:name', element: <Collection/>}
            // ]
          },
          { 
            path: '/profile', element: <Profile/>,
            // children: [
            //   { path: 'bill', element: <Bill/>},
            //   { path: 'investions', element: <Investions/>},
            //   { 
            //     path: 'projects', 
            //     element: <MyProjects/>,
            //     children: [
            //       { path: '/profile/projects/:name', element: <Draft/>}
            //     ],
            //   },
            //   { path: 'supports', element: <Supports/> },
            //   {
            //     path: 'settings', 
            //     element: <Settings/>,
            //     children: [
            //       { index: true, element: <UserData/>},
            //       { path: 'change-password', element: <ChangePassword/>}
            //     ]
            //   },
            // ]
          },
          {
            path: '/project/:id',
            children: [
              { 
                element: <Project/>, 
              },
              { 
                path: 'edit', 
                element: <EditProject/>, 
              }
            ],
          },
          { path: '*', element: <NotFound/>}
        ]
      }
    ]
  }
])