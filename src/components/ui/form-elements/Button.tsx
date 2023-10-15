import React, { FC } from 'react'
import { ButtonProps } from './Button.props'
import cn from 'classnames'
import styles from './form.module.scss'

export const Button:FC<ButtonProps> = ({children, className, ...rest}) => {
  return (
    <button className={cn(styles.btn, className)} {...rest}>
        {children}
    </button>
  )
}
