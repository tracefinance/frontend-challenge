import React, { forwardRef, InputHTMLAttributes } from 'react'

import { stitches } from '~/styles'

import { Input as BaseInput } from './Input'
import { Label as BaseLabel } from './Label'

export type TextfieldProps = {
  id: string
  label: string
} & InputHTMLAttributes<HTMLInputElement>

export const LabelledTextfield = forwardRef<HTMLInputElement, TextfieldProps>(
  ({ id, label, ...props }, ref) => {
    return (
      <Container>
        <Input
          ref={ref}
          id={id}
          aria-labelledby={id}
          aria-label={label}
          placeholder=" "
          {...props}
        />
        <Label htmlFor={id}>{label}</Label>
      </Container>
    )
  },
)

LabelledTextfield.displayName = 'LabelledTextfield'

const Container = stitches('div', {
  position: 'relative',
})

const Input = stitches(BaseInput, {
  '&:not(:placeholder-shown)': {
    paddingTop: '$4',
  },

  '&:not(:placeholder-shown) + label': {
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
