import React from 'react'
import classNames from 'classnames'
import classes from './Button.module.scss'
import { ButtonProps } from './Button.types'

export const Button: React.FC<ButtonProps> = ({ type, text, onClick }) => {
  return (
    <button type="button" className={classNames(classes.Button, classes[`Button-${type}`])} onClick={onClick}>
      {text}
    </button>
  )
}
