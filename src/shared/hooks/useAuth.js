import React from 'react'
import { pb } from 'shared/api'

export const useAuth = () => {

  const [user, setUser] = React.useState(pb.authStore.model)
  const [token, setToken] = React.useState(pb.authStore.token)

  React.useEffect(() => {
    pb.authStore.onChange((token, model) => {
      setToken(token);
      setUser(model);
    })
  }, [])

  return {
    user,
    token,
  }
}
