import React from 'react'
import { Button, PasswordInput, TextInput, UnstyledButton } from '@mantine/core'
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
			className='space-y-4'
		>
      <Controller
        name="email"
        control={control}
        render={({field}) => (
          <TextInput
            {...field}
            type='email' 
            placeholder='Ваш email'
						label='Почта'
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
						label='Пароль'
						// className={styles.input}
					/> 
				)}
			/>
			<Button
				type='submit' 
				fullWidth
			>
				Войти
			</Button>
			<div className='flex gap-2 justify-center'>
				<p>Первый раз тут?</p>
				<UnstyledButton onClick={() => handleType('signup')} className='link'>Зарегистрируйтесь!</UnstyledButton>
			</div>
			<div className='text-center'>
				<UnstyledButton className='link' onClick={() => handleType('forgot')}>
					Забыли пароль?
				</UnstyledButton>
			</div>
  </form>
  )
}