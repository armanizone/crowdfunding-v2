import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  container: 'grid grid-cols-2 lg:grid-cols-4 gap-4',
  box: 'border border-slate-200 h-72 rounded-md relative bg-white p-4 cursor-pointer',
  boxInner: 'w-full h-full flex justify-center items-center text-2xl underline'
}

export const Courses = () => {
  return (
    <div className='courses'>
      <div className='flex flex-col gap-4'>
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={styles.boxInner}>
              Форсайт
            </div>
          </div>
          <div className={styles.box}>
            <p className={styles.boxInner}>
              Курсы
            </p>
          </div>
          <div className={styles.box}>
            <p className={styles.boxInner}>
              Переход
            </p>
          </div>
          <div className={styles.box}>
            <p className={styles.boxInner}>
              Ссылки
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          <Link to='/about/projects'>
            <div className={styles.box}>
              <span className='absolute left-1/2 -translate-x-1/2 top-4 text-2xl'>
                Программа:
              </span>
              <p className={styles.boxInner}> 
                Обьяснение пробныее 3 урока
              </p>  
            </div>
          </Link>
          <Link to='/about/projects'>
            <div className={styles.box}>
              <span className='absolute left-1/2 -translate-x-1/2 top-4 text-2xl'>
                Проекты:
              </span>
              <p className={styles.boxInner}> 
                Что представляют проекты
              </p>  
            </div>
          </Link>
          <Link to='/about/early-access'>
            <div className={styles.box}>
              <span className='absolute left-1/2 -translate-x-1/2 top-4 text-2xl'>
                Ранний доступ:
              </span>
              <p className={styles.boxInner}> 

              </p>  
            </div>
          </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {/* {Array(4).fill(value).map((item, i) => {
            return (
              <div  key={i}>
                <Card
                  type='preview'
                  project={item}
                />
              </div>
            )
          })} */}
        </div>
      </div>
    </div>
  )
}
