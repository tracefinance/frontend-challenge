import React, { forwardRef, InputHTMLAttributes } from 'react'

import { CheckIcon } from '@radix-ui/react-icons'

import { stitches } from '~/styles'

import { Label } from './Label'

export type CheckboxProps = {
  id: string
  label: string
} & InputHTMLAttributes<HTMLInputElement>

export const LabelledCheckbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, ...props }, ref) => {
    return (
      <Container>
        {label}
        <Checkbox
          type="checkbox"
          ref={ref}
          id={id}
          aria-labelledby={id}
          aria-label={label}
          {...props}
        />
        <Checkmark>
          <CheckIcon />
        </Checkmark>
      </Container>
    )
  },
)

LabelledCheckbox.displayName = 'LabelledTextfield'

const Container = stitches(Label, {
  display: 'block',
  position: 'relative',
  pl: '$7',
  cursor: 'pointer',
  color: '$dark100',
  fontWeight: '$light',
  lineHeight: 1.45,
  textAlign: 'center',
  width: 'max-content',

  '& input:checked ~ span': {
    background: '$primary500',
    border: 'none',

    '& svg': {
      color: '$black',
    },
  },

  '& input:checked ~ span > svg': {
    display: 'block',
  },
})
const Checkbox = stitches('input', {
  position: 'absolute',
  opacity: '0',
  height: '0',
  width: '0',
})
const Checkmark = stitches('span', {
  position: 'absolute',
  top: '0',
  left: '0',
  height: '20px',
  width: '20px',
  borderRadius: '$sm',
  border: '2px solid $dark300',

  svg: {
    display: 'none',
    height: '100%',
    width: '100%',
  },
})
