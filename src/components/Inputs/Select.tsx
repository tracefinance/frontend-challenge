import React, { forwardRef, SelectHTMLAttributes } from 'react'

import { ChevronDownIcon } from '@radix-ui/react-icons'

import { stitches } from '~/styles'

export type SelectProps = {
  id: string
  label: string
  options: Record<string, string>
} & SelectHTMLAttributes<HTMLSelectElement>

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ id, label, options, ...props }, ref) => {
    const [isDefault, setIsDefault] = React.useState(true)

    return (
      <Wrapper>
        <SelectStyle
          ref={ref}
          id={id}
          aria-label={label}
          defaultValue=""
          {...props}
          onChange={() => setIsDefault(false)}
          css={!isDefault ? { color: '$white' } : {}}
        >
          <option disabled value="">
            Selecione seu país
          </option>
          {Object.keys(options).map((key) => (
            <option key={key} value={key}>
              {options[key as keyof typeof options]}
            </option>
          ))}
        </SelectStyle>
        <ChevronDownIcon />
      </Wrapper>
    )
  },
)

Select.displayName = 'Select'

const Wrapper = stitches('div', {
  background: '$dark950',
  border: '1px solid $dark800',
  borderRadius: '$md',
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
    pointerEvents: 'none',
  },

  '&:hover > svg': {
    color: '$dark300',
    transition: 'none',
  },
})

const SelectStyle = stitches('select', {
  appearance: 'none',
  background: 'transparent',
  fontSize: '$sm',
  color: '$dark500',
  px: '$4',
  height: '$14',
  outline: 'none',
  border: 'none',
  width: '100%',
  borderRadius: '$md',

  '&:focus': {
    outline: '1.5px solid $dark100',
    border: 'none',
    color: '$white',
  },

  'option:first-child': {
    display: 'none',
  },

  '&[aria-invalid=true]': {
    outline: '1px solid $error500',
  },

  option: {
    background: '$dark950',
  },
})
