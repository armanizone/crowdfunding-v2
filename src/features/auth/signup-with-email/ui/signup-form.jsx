import { Button, PasswordInput, TextInput } from '@mantine/core';
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { signupSchema, signupWithEmail } from '../model/signup';
import { yupResolver } from "@hookform/resolvers/yup"
import { showNotification } from '@mantine/notifications';
import { useLocation, useNavigate } from 'react-router';

export const SignupForm = ({handleType}) => {

  const navigate = useNavigate()
  const location = useLocation()

  const { control, handleSubmit, clearErrors, setValue, formState: { errors, isLoading }} = useForm({
    values: {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    },
    resolver: yupResolver(signupSchema)
  })

  const [errorMessage, setErrorMessage] = React.useState('')
  
  const onSumbit = async (data) => {
    await signupWithEmail(data)
    .then((res) => {
      showNotification({
        title: 'Айторизация',
        message: `Вы успешно вошли в систему как ${res?.name}`
      })
      navigate(location.pathname)
    })
    .catch((err) => {
      console.log(err, 'err');
    })
  };

  function handleInputChange (name, val) {
    setValue(name, val.currentTarget.value ?? val)
    clearErrors(name)
    setErrorMessage('')
  }

  return (
    <form 
      onSubmit={handleSubmit(onSumbit)}
      className='space-y-4'
    >
        <Controller
          name="name"
          control={control}
          render={({field}) => (
            <TextInput
              {...field}
              name='name'
              placeholder='Ваше имя'
              label='Имя'
              variant='filled'
              onChange={event => handleInputChange('name', event)}
              error={errors.name?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({field}) => (
            <TextInput
              {...field}
              name='email'
              placeholder='Ваш email'
              label='Почта'
              variant='filled'
              onChange={event => handleInputChange('email', event)}
              error={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({field}) => (
            <PasswordInput
              {...field}
              name='password'
              placeholder='Пароль'
              label='Пароль'
              variant='filled'
              onChange={event => handleInputChange('password', event)}
              error={errors.password?.message}
            />
          )}
        />

        <Controller
          name="password_confirmation"
          control={control}
          render={({field}) => (
            <PasswordInput
              {...field}
              name='password_confirmation'
              placeholder='Подтверждение пароля'
              label='Подтверждение пароля'
              variant='filled'
              onChange={event => handleInputChange('password_confirmation', event)}
              error={errors.password_confirmation?.message}
            />
          )}
        />
      <Button
        type='submit'
        fullWidth
      >
        Создать аккаунт
      </Button>

      <div className='flex gap-2 justify-center'>
        <p>Уже были у нас?</p>
        <p onClick={() => handleType('login')} className='link'>Войти!</p>
      </div>

    </form>
  )
}
