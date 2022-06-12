import React, { forwardRef, InputHTMLAttributes } from 'react'

export type TextfieldProps = {
  id: string
  label: string
} & InputHTMLAttributes<HTMLInputElement>

export const LabelledTextfield = forwardRef<HTMLInputElement, TextfieldProps>(
  ({ id, label, ...props }, ref) => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input
          ref={ref}
          id={id}
          aria-labelledby={id}
          aria-label={label}
          {...props}
        />
      </>
    )
  },
)

LabelledTextfield.displayName = 'LabelledTextfield'
