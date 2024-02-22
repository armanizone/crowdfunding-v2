import React from 'react'
import { Button } from '@mantine/core'
import clsx from 'clsx'
import { useSearchParams } from 'react-router-dom'

import { BsEye } from 'react-icons/bs'

export const EditProjectButtons = ({className, tab, ...props}) => {

  const [searchParams, setSearchParams] = useSearchParams()

  function handleBackClick () {
    switch(tab) {
      case null: 
        break
      case 'details':
        searchParams.delete('tab')
        setSearchParams(searchParams)
        break
      case 'rewards':
        setSearchParams({tab: 'details'})
        break
      case 'verification':
        setSearchParams({tab: 'rewards'})
        break
      case 'incubator':
        setSearchParams({tab: 'verification'})
        break
    }
  }

  function handleForwardClick () {
    switch(tab) {
      case null: 
        setSearchParams({tab: 'details'})
        break
      case 'details':
        setSearchParams({tab: 'rewards'})
        break
      case 'rewards':
        setSearchParams({tab: 'verification'})
        break
      case 'verification':
        setSearchParams({tab: 'incubator'})
        break
    }
  }

  return (

    <div className={clsx(className, `bg-white p-4 rounded-md shadow grid grid-cols-3 items-center gap-4 mt-4`)} {...props}>
        <div>
          {searchParams.get('tab') && (
            <Button
              onClick={handleBackClick}
              variant='light'
              disabled={!searchParams.get('tab')}
            >
              Назад
            </Button>
          )}
        </div>
      <div className='w-full flex gap-4 justify-center'>
        <Button
          variant='subtle'
          // leftIcon={<BsEye />}
          size='sm'
          onClick={() => setPreview(true)}
        >
          Предпросмотр
        </Button>
        <Button
          size='sm'
          variant='filled'
          // onClick={callback}
          // loading={loading}
        >
          Сохранить
        </Button>
      </div>
      <div className='ml-auto'>
        <Button
          size='sm'
          onClick={handleForwardClick}
          variant='light'
          disabled={searchParams.get('tab') === 'incubator'}
        >
          Продолжить
        </Button>
      </div>
          {/* <Button
            size='sm'
            disabled
          >
            Бизнес-инкубатор
          </Button>
          <Button
            size='sm'
            onClick={toModeration}
          >
            Отправить на модерацию
          </Button> */}
    </div>
  )

}

