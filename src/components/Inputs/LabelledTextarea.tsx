import React, { forwardRef, TextareaHTMLAttributes } from 'react'

import { stitches } from '~/styles'

import { Input as BaseInput } from './Input'
import { Label as BaseLabel } from './Label'

export type TextfieldProps = {
  id: string
  label: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export const LabelledTextarea = forwardRef<HTMLTextAreaElement, TextfieldProps>(
  ({ id, label, ...props }, ref) => {
    return (
      <Container>
        <TextArea
          as="textarea"
          ref={ref}
          id={id}
          aria-label={label}
          aria-labelledby={id}
          placeholder=" "
          {...props}
        />
        <Label htmlFor={id}>{label}</Label>
      </Container>
    )
  },
)

LabelledTextarea.displayName = 'LabelledTextarea'

const Container = stitches('div', {
  position: 'relative',
})

const TextArea = stitches(BaseInput, {
  py: '$4',
  minHeight: '$24',
  resize: 'none',
  overflow: 'hidden',

  '&:not(:placeholder-shown)': {
    paddingTop: '$4',
  },

  '&:not(:placeholder-shown) + label': {
    display: 'revert',
    fontSize: '$xs',
    color: '$dark300',
    fontWeight: '$medium',
    top: '-10px',
    left: '$3',
    background: '$dark900',
    px: '$2',
    py: '2px',
    borderRadius: '$sm',
    border: '1px solid $dark300',
  },
})

const Label = stitches(BaseLabel, {
  position: 'absolute',
  transition: 'all .25s ease',
  top: '$5',
  left: '$4',
})
