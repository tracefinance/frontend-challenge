type ValidationMessageProps = {
  id: string
  message: string
}
export const ValidationMessage = ({ id, message }: ValidationMessageProps) => (
  <span id={id} role="alert" aria-live="assertive">
    {message}
  </span>
)
