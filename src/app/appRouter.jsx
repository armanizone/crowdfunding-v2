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

export const router = createBrowserRouter([
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
            // children: [
            //   { index: true, element: <Description/> },
            //   { path: 'comments', element: <Comments/> },
            //   { path: 'faq', element: <Faq/> },
            //   { path: 'rating', element: <Rating/> },
            //   { path: 'fee', element: <Fee/> },
            // ] 
          },
          { 
            path: 'edit', 
            element: <EditProject/>, 
            // children: [
            //   { index: true, element: <Main/> },
            //   { path: 'details', element: <Details/> },
            //   { path: 'rewards', element: <Rewards/> },
            //   { path: 'verification', element: <Verification/> },
            //   { path: 'incubator', element: <Incubator/> },
            // ]
          }
        ],
      },
      { path: '*', element: <NotFound/>}
    ]
  }
  ])