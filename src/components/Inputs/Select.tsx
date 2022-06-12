import React, { forwardRef, SelectHTMLAttributes } from 'react'

export type SelectProps = {
  id: string
  label: string
  options: Record<string, string>
} & SelectHTMLAttributes<HTMLSelectElement>

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ id, label, options, ...props }, ref) => {
    return (
      <select ref={ref} id={id} aria-label={label} {...props}>
        <option value="">Selecione seu país</option>
        {Object.keys(options).map((key) => (
          <option key={key} value={key}>
            {options[key as keyof typeof options]}
          </option>
        ))}
      </select>
    )
  },
)

Select.displayName = 'Select'
