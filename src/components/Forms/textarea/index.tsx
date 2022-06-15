import ErrorForms from "../error"
import * as S from "./styles"

interface MetodosTextarea {
  value: string
  error: string
  name: string
  onChange({target}: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void
  onBlur: () => void
}

function Textarea({value,onChange,error, name,onBlur}: MetodosTextarea) {



  return (
    <S.TextareaContainer>
      <S.TextareaStyles
        value={value}
        onChange={onChange}
        placeholder={name}
        onBlur={onBlur}
      />
      <S.Label>Bio</S.Label>
      {error && <ErrorForms>{error}</ErrorForms>}
    </S.TextareaContainer>
  )

}

export default Textarea