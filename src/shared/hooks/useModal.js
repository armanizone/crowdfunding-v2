import React from 'react'
import { openContextModal } from '@mantine/modals'

const baseProps = {
  innerProps: {},
  centered: true,
  lockScroll: true,
  closeOnClickOutside: false,
}

export const useModal = () => {

  const openModal = {
    /**
     * 
     * @param {import('@mantine/core').ModalProps} props 
     * @returns 
     */
    auth: (props) => openContextModal({
      modal: 'auth', 
      ...baseProps,
      ...props
    }),
    preview: (props) => openContextModal({
      modal: 'preview', 
      ...baseProps,
      ...props
    }),
  }

  return {
    openModal
  }
}