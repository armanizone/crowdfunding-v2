import React from 'react'
import { Hero } from './hero'
import { Cover } from './cover'
import { Sidebar } from './sidebar'
import { Stats } from './stats'
import { Courses } from './courses'

export const Home = () => {
  return (
    <>
      <div className='w-full h-full'>
        <Hero/>
        <div className="container">
          <div className='main-grid'>
            <Cover/>
            <Sidebar/>
            <Stats/>
            <Courses/>
          </div>
        </div>
      </div>
    </>
  )
}
