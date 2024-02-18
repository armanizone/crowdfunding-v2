import { Button } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

export const Cover = () => {
  return (
    <div className='cover w-full bg-white border border-slate-200 rounded-md'>
      <div className="flex justify-between items-center w-full h-96">
        <div className='flex-1 flex justify-center items-end h-full mb-8 relative'>

          <div className='z-50 text-center'>
            <h2 className='text-xl md:text-4xl lg:text-5xl mb-20'>Бизнес инкубатор</h2>
            <Button
              size='md'
              component={Link}
              to='/project/1663083353437/edit/incubator'
            >
              Действие
            </Button>                
          </div>
        </div>
        <div className='flex-1 flex justify-center items-end h-full mb-8 relative'>

          <div className='z-50 text-center'>
            <h2 className='text-xl md:text-4xl lg:text-5xl mb-20'>Стартап проекты</h2>
            <Button
              size='md'
            >
              Действие
            </Button>   
          </div>  
        </div>
      </div>
    </div>
  )
}
