import { Button } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import React from 'react'
import { useModal } from 'shared/hooks'
import { Label } from 'shared/lib'

export const About = () => {

  const { openModal } = useModal()

  return (
    <div>
      <Button
        onClick={() => {
          showNotification({
            message: 'asdasdasd'
          })
        }}
      >

      </Button>
    </div>
  )
}
