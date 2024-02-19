import React from 'react'
import { Button, PasswordInput, TextInput, UnstyledButton } from '@mantine/core'
import { Controller, useForm } from 'react-hook-form'
import { loginSchema, loginWithEmail } from '../model/login'
import { yupResolver } from '@hookform/resolvers/yup'
import { showNotification } from '@mantine/notifications'

export const LoginForm = ({handleType, ...rest}) => {

	const { control, handleSubmit, clearErrors, setValue, formState: { errors } } = useForm({
    values: {
      email: '',
      password: ''
    },
    resolver: yupResolver(loginSchema)
  })

  const [errorMessage, setErrorMessage] = React.useState('')

	const onSubmit = async (data) => {
		await loginWithEmail(data)
		.then((res) => {
			console.log(res, 'res');
			showNotification({
				title: 'Вход',
				message: `Вы успешно вошли в систему как ${res.record?.name}`,
				color: 'blue'
			})
			rest.context.closeModal(rest.id)
			rest.innerProps?.onSucc()
		})
		.catch(err => {
			setErrorMessage(err)
		})
	}

	function handleInputChange (name, val) {
    setValue(name, val.currentTarget.value ?? val)
    clearErrors(name)
    setErrorMessage('')
  }



  return (
    <form 
			onSubmit={handleSubmit(onSubmit)}
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
						error={errors.email?.message}
						onChange={event => handleInputChange('email', event)}
						variant='filled'
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
						error={errors.password?.message}
						onChange={event => handleInputChange('password', event)}
						variant='filled'
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