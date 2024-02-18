import React from 'react'
import { LoginForm } from 'features/auth/login-with-email'
import { RestorePasswordForm } from 'features/auth/restore-password'
import { SignupForm } from 'features/auth/signup-with-email'

export const AuthModal = ({innerProps}) => {

  const [current, setCurrent] = React.useState(innerProps.type ?? "login")

  function handleType (type) {
    setCurrent(type)
  }

  return (
    <>
      {(current === "login") && <LoginForm handleType={handleType}/>}
      {(current === "signup") && <SignupForm handleType={handleType}/>}
      {(current === "forgot") && <RestorePasswordForm handleType={handleType}/>}
    </>
  )
}
