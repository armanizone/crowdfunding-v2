import React from 'react'
import { Accordion } from '@mantine/core'

export const Faq = () => {
  return (
    <div className='my-10 lg:my-20'>
      <div className="container">
        <div className='w-full'>
          <h2 className='text-center text-2xl font-medium mb-8'>Часто-задаваемые вопросы</h2>
          <div className='rounded-md overflow-hidden'>
            <Accordion defaultValue='acc' variant='separated' radius={'md'}>
              {Array(10).fill(1).map((_, i) => {
                return (
                  <Accordion.Item value={String(i)} key={i} className='bg-white'>
                    <Accordion.Control>
                      Lorem ipsum dolor sit amet.
                    </Accordion.Control>
                    <Accordion.Panel>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eaque officiis aliquid veritatis obcaecati unde vero reiciendis autem vel, architecto dolore ipsum magnam voluptatem voluptatibus modi ad, labore inventore facilis!
                    </Accordion.Panel>
                  </Accordion.Item>
                )
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
