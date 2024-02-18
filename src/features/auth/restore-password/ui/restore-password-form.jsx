import { Button, TextInput } from '@mantine/core';
import React from 'react'
import { useForm, Controller } from "react-hook-form"

export const RestorePasswordForm = ({handleType}) => {

  const { control, handleSubmit, } = useForm({
    defaultValues: {
      email: ''
    }
  })

  const onSumbit = (data) => console.log(data);

  return (
    <form 
      // onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => handleSubmit(onSumbit)}
      // className={styles.form}  
    >
        <Controller
          name="email"
          control={control}
          render={({field}) => (
            <TextInput
              {...field}
              name='email'
              // className={styles.input}
              placeholder='Ваш email'
            />
          )}
        />

      <Button
        type='submit'
      >
        Восстановить пароль
      </Button>
      <div className='text-center'>
        <span className='link' onClick={() => handleType('login')}>
          Назад
        </span>
      </div>
    </form>
  )
}
