import React from 'react'
import { Burger, Button, Collapse, Drawer } from '@mantine/core'

import { Link, useLocation } from 'react-router-dom'

// import ExploreMenu from './components/ExploreMenu'
// import UserMenu from './components/UserMenu'
import { useMediaQuery } from '@mantine/hooks'

import next from 'shared/assets/next.png'

export const styles = {
  nav: 'hidden md:flex items-center gap-x-4 lg:gap-x-8',
  divider: 'border-l border-slate-100 h-8',
  menu: 'flex flex-col px-4 text-sm whitespace-nowrap divide-y divide-solid',
  menuLink: 'light-link',
  profileMenuLink: 'flex items-center gap-x-6 cursor-pointer',
  icon: 'text-xl text-pink-500 hover:text-black transition-all duration-200'
}

export const Header = () => {

  const [opened, setOpened] = React.useState(false)

  let location = useLocation().pathname

  React.useEffect(() => {
    setOpened(false)
  }, [location])

  const matches = useMediaQuery('(min-width: 768px)')

  return (
    <div className='w-full bg-white border border-slate-200 z-50 mb-8'>
      <div className='container'>
        <div className='flex items-center justify-between py-4'>
          <Burger
            opened={opened}
            onClick={()=> setOpened(q => !q)}
            title='Menu'
            color='blue'
            className='block md:hidden'
          />
          <nav className={styles.nav}>
            {/* <ExploreMenu/> */}
            <span className='light-link'>
              <Link to='/incubator'>
                Бизнес-инкубатор
              </Link>
            </span>
          </nav>
            <Link to={'/'}>
              <div className='relative w-8 cursor-pointer'>
                <img
                  src={next}
                  alt='logo'
                  width={35}
                  height={35}
                />
              </div>
            </Link>
              <nav className={'flex items-center gap-x-4 lg:gap-x-8'}>
                {matches && (
                  <>
                    <Button
                      size='sm'
                      variant='subtle'
                      component={Link}
                      to='/create'
                    >
                      Создать проект
                    </Button>
                    <div className={styles.divider}></div>
                  </>
                )}
                {/* <UserMenu/>  */}
              </nav>
        </div>
      </div>
      <Collapse in={opened}>
        <nav className='flex flex-col gap-y-3 p-3'>
          <Link to='/incubator'>Бизнес-Инкубатор</Link>
          <Link to='/explore'>Все проекты</Link>
          <Link to='/explore/collection/active'>Последние обновленные</Link>
          <Link to='/explore/collection/active'>Новые</Link>
          <Link to='/explore/collection/active'>Активные</Link>
          <Link to='/explore/collection/active'>Обсуждаемые</Link>
          <Link to='/explore/collection/active'>Близкие к завершению</Link>
          <div>
            <Button
              variant='outline'
              component={Link}
              to='/create'
            >
              Создать проект
            </Button>
          </div>
        </nav>
      </Collapse>
    </div>
  )
}