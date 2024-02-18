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

  const {token} = useAuth()
  const {openModal} = useModal()

  async function createProject () {
    if (!token) return openModal.auth()
    setLoading(true)
    await pb.collection('projects').create({
      user: {},
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
      onClick={createProject}
      loading={loading}
      {...rest}
    >
      Создать проект
    </Button>
  )
}
