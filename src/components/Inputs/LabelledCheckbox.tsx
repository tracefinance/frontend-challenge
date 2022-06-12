import React, { forwardRef, InputHTMLAttributes } from 'react'

export type CheckboxProps = {
  id: string
  label: string
} & InputHTMLAttributes<HTMLInputElement>

export const LabelledCheckbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, ...props }, ref) => {
    return (
      <>
        <input
          type="checkbox"
          ref={ref}
          id={id}
          aria-labelledby={id}
          aria-label={label}
          {...props}
        />
        <label htmlFor={id}>{label}</label>
      </>
    )
  },
)

LabelledCheckbox.displayName = 'LabelledTextfield'
