import React from 'react'
import { LoginForm } from 'features/auth/login-with-email'
import { RestorePasswordForm } from 'features/auth/restore-password'
import { SignupForm } from 'features/auth/signup-with-email'

/**
 * 
 * @param {import('@mantine/modals').ContextModalProps} props.rest 
 * @returns 
 */
export const AuthModal = ({...rest}) => {

  const [current, setCurrent] = React.useState(rest.innerProps.type ?? "login")

  function handleType (type) {
    setCurrent(type)
  }

  return (
    <>
      {current === "login" && <LoginForm handleType={handleType} {...rest} />}
      {current === "signup" && <SignupForm handleType={handleType} {...rest} />}
      {current === "forgot" && <RestorePasswordForm handleType={handleType} {...rest} />}
    </>
  )
}
