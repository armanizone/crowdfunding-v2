import React from 'react'
import clsx from 'clsx'
import { Tooltip } from '@mantine/core'
import { CgDanger } from 'react-icons/cg'

export const styles = {
  wrapper: 'border-t border-x border-slate-200 relative',
  box: 'sm:border-r border-slate-200 p-4',
  rowField: 'grid grid-cols-1 sm:grid-cols-[275px_auto] relative',
  restInfo: 'absolute bottom-1 right-1 text-xs text-slate-500',
  label: '  flex justify-between items-center',
  labelCol: 'flex-col items-start',
  labelName: 'text-base font-medium whitespace-nowrap',
  labelIcon: 'text-xl text-violet-600',
  description: 'mt-2 text-slate-500 text-sm'
}
/**
 * A customizable label component.
 * @param {object} props - The props for the component.
 * @param {React.ReactNode} [props.children] - The content to be displayed alongside the label.
 * @param {string} props.label - The label text.
 * @param {string} [props.tooltip] - The tooltip text.
 * @param {number} [props.left=0] - The number of characters left.
 * @param {string} [props.description] - Additional description text.
 * @param {string} [props.className] - Additional CSS classes to be applied to the wrapper div.
 * @param {rest} props.rest - Additional props to be spread to the wrapper div.
 * @returns {JSX.Element} The Label component.
 */

export const Label = ({children, label, tooltip, left = 0, description, className, ...rest}) => {
  return (
    <div className={clsx(className, styles.wrapper)} {...rest}>
      <div className={styles.rowField}>
        <div className={styles.box}>
          <div className={styles.label}>
            <span className={styles.labelName}>
              {label}
            </span>
            {tooltip && (
              <Tooltip
                label={tooltip}
                withArrow
                multiline 
                width={280}
                transitionProps={{
                  transition: "fade",
                  duration: 200
                }}
                color={'black'}
              >
                <span className={styles.labelIcon}>
                  <CgDanger />
                </span>
              </Tooltip>
            )}
          </div>
          {description && (
            <p className={styles.description}>{description}</p>
          )}
        </div>
        {children}
        {(left !== 0) && (
          <div className={styles.restInfo}>
            Осталось {left - 0} символов
          </div>
        )}
      </div>
    </div>
  )
}