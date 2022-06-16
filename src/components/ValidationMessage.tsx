import { stitches } from '~/styles'
type ValidationMessageProps = {
  id: string
  message: string
}
export const ValidationMessage = ({ id, message }: ValidationMessageProps) => (
  <Message id={id} role="alert" aria-live="assertive">
    {message}
  </Message>
)

const Message = stitches('span', {
  fontSize: '$xs',
  fontWeight: '$regular',
  color: '$error500',
})
