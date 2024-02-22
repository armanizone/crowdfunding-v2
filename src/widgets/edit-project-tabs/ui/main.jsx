import { Button, TextInput } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React from 'react'
import { Label } from 'shared/lib'

export const Main = ({project}) => {


  return (
    <div className='w-full h-full grid grid-cols-[auto_300px] gap-6'>
      <div>
        <Label
          label='Название проекта'
          tooltip='Заголовок который будет представлять ваш проект (обязательное поле)'
          // left={50 - proj?.title?.length!}
        >
          <TextInput
            // value={proj?.title ?? ''}
            // onChange={handleInput}
            classNames={{
              error: 'edit-error',
            }}
            py={6}
            px={16}
            size='md'
            placeholder="Не более 50 символов"
            type="text"
            name="title"
            required
            variant="unstyled"
            maxLength={50}
            // error={errors.title?.[0]}
          />
        </Label>
      </div>
      <div>
        Project preview
      </div>
    </div>
  )
}
