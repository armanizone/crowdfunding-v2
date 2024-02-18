import React from 'react'
import { CreateProjectButton } from 'features/create-project'
import { Button, Checkbox } from '@mantine/core'
import { useModal } from 'shared/hooks'

import createWelcome from 'shared/assets/create-welcome.svg'
import { Conditions } from './conditions'
import { Faq } from './faq'

export const CreateProject = () => {

  const { openModal } = useModal()

  const [check, setCheck] = React.useState({
    service: false,
    data: false
  })

  const handleCheck = (event) => {
    const { name, checked } = event.target
    setCheck({ ...check, [name]: checked })
  }
  
  return (
    <>
      <div className='w-full py-10 sm:py-20'>
        <div className="container">
          <div className='flex flex-col lg:flex-row justify-evenly gap-4 '>
            <div className='flex-1 max-w-lg flex flex-col justify-between gap-10'>
              <div className='text-center'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>
                  Реализуй идею и найди единомышленников
                </h2>
              </div>
              <div >
                <div className='flex gap-2 items-center'>
                  <Checkbox
                    id='service' 
                    name='service'
                    onChange={handleCheck}
                    size='sm'
                  />
                  <label htmlFor='service' className='text-sm sm:textbase'>Я согласен с правила сервиса</label>
                </div>
                <div className='flex gap-2 items-center mt-2'>
                  <Checkbox
                    id='data' 
                    name='data'
                    onChange={handleCheck}
                    size='sm'
                  />
                  <label htmlFor='data' className='text-sm sm:textbase'>Я даю согласие на обработку своих персональных данных</label>
                </div>
              </div>
              <CreateProjectButton
                size='xl'
                className='w-full uppercase font-bold tracking-widest sm:text-xl'
                disabled={!check.data || !check.service}
              />
            </div>
            <div className='hidden lg:block flex-1 max-w-lg h-auto'>
              <img src={createWelcome} alt='welcome'/>
            </div>
          </div>
        </div>
      </div>
      <Conditions/>
      <Faq/>
    </>
  )
}
