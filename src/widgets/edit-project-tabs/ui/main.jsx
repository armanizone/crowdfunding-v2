import { TextInput } from '@mantine/core'
import React from 'react'
import { Label } from 'shared/lib'

export const Main = () => {
  return (
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
  )
}
