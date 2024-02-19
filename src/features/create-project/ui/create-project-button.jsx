import React from 'react'
import { Button } from '@mantine/core'
import { pb } from 'shared/api'
import { useAuth, useModal } from 'shared/hooks'
import { useNavigate } from 'react-router'

/**
 * 
 * @param {import('@mantine/core').ButtonProps} props.rest 
 * @returns 
 */
export const CreateProjectButton = ({...rest}) => {

  const navigate = useNavigate()

  const [loading, setLoading] = React.useState(false)

  const {token, user} = useAuth()
  const {openModal} = useModal()

  async function checkAuth () {
    if (!token) return openModal.auth({
      title: 'Авторизация', 
      innerProps: {onSucc: () => createProject()} 
    })
    createProject()
  }

  async function createProject () {
    setLoading(true)
    await pb.collection('projects').create({
      user: user?.id,
      status: 'created',
    })
    .then((response) => {
      navigate(`/project/${response.id}/edit`)
    })
    .catch((error) => {
      console.log(error, 'create project err');
    })
    .finally(() => {
      setLoading(false)
    })
  }

  return (
    <Button
      onClick={checkAuth}
      loading={loading}
      {...rest}
    >
      Создать проект
    </Button>
  )
}
