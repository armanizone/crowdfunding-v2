import React from 'react'
import { Button, PasswordInput, TextInput } from '@mantine/core'
import { Controller, useForm } from 'react-hook-form'

export const LoginForm = ({handleType}) => {

	const { control, handleSubmit, } = useForm({
    values: {
      email: '',
      password: ''
    }
  })

  return (
    <form 
			// onSubmit={handleSubmit(onSubmit)}
			// className={styles.form}
		>
      <Controller
        name="email"
        control={control}
        render={({field}) => (
          <TextInput
            {...field}
            type='email' 
            placeholder='Ваш email'
            // className={styles.input}
        /> 
        )}
      /> 
			<Controller
				name="password"
				control={control}
				render={({field}) => (
					<PasswordInput
						{...field}
						placeholder='Пароль'
						// className={styles.input}
					/> 
				)}
			/>
			<Button
				type='submit' 
			>
				Войти
			</Button>
			<div className='flex gap-2 justify-center'>
				<p>Первый раз тут?</p>
				<p onClick={() => handleType('signup')} className='link'>Зарегистрируйтесь!</p>
			</div>
			<div className='text-center'>
				<span className='link' onClick={() => handleType('forgot')}>
					Забыли пароль?
				</span>
			</div>
  </form>
  )
}