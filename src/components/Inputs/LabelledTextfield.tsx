import React, { forwardRef, InputHTMLAttributes } from 'react'

import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons'

import { stitches } from '~/styles'

import { Input as BaseInput } from './Input'
import { Label as BaseLabel } from './Label'

export type TextfieldProps = {
  id: string
  label: string
} & InputHTMLAttributes<HTMLInputElement>

export const LabelledTextfield = forwardRef<HTMLInputElement, TextfieldProps>(
  ({ id, label, type, ...props }, ref) => {
    const [showPassword, toggleShowPassword] = React.useReducer(
      (v) => !v,
      false,
    )

    return (
      <Container>
        <Input
          ref={ref}
          id={id}
          aria-labelledby={id}
          aria-label={label}
          placeholder=" "
          {...props}
          type={showPassword ? 'text' : type}
        />
        <Label htmlFor={id}>{label}</Label>
        {type === 'password' &&
          (showPassword ? (
            <EyeNoneIcon onClick={toggleShowPassword} />
          ) : (
            <EyeOpenIcon onClick={toggleShowPassword} />
          ))}
      </Container>
    )
  },
)

LabelledTextfield.displayName = 'LabelledTextfield'

const Container = stitches('div', {
  position: 'relative',

  '& > svg': {
    position: 'absolute',
    top: '50%',
    right: '$2',
    transform: 'translateY(-50%)',
    height: '$10',
    width: '$10',
    px: '$2',
    color: '$dark500',
    cursor: 'pointer',
    transition: 'color .3s ease-in',

    '&:hover': {
      color: '$dark300',
      transition: 'none',
    },
  },
})

const Input = stitches(BaseInput, {
  '&:not(:placeholder-shown), &:focus': {
    paddingTop: '$4',
  },

  '&:not(:placeholder-shown) + label, &:focus + label': {
    display: 'revert',
    fontSize: '$xs',
    color: '$dark300',
    fontWeight: '$medium',
    top: '$2',
    left: '$4',
  },
})

const Label = stitches(BaseLabel, {
  position: 'absolute',
  transition: 'all .25s ease',
  top: '$5',
  left: '$4',
})
