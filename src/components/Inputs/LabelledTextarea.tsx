import React, { forwardRef, TextareaHTMLAttributes } from 'react'

export type TextfieldProps = {
  id: string
  label: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export const LabelledTextarea = forwardRef<HTMLTextAreaElement, TextfieldProps>(
  ({ id, label, ...props }, ref) => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <textarea
          ref={ref}
          id={id}
          aria-label={label}
          aria-labelledby={id}
          {...props}
        />
      </>
    )
  },
)

LabelledTextarea.displayName = 'LabelledTextarea'
