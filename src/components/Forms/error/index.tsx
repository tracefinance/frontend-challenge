import * as S from "./styles"

interface ErrorProps {
  children: string
}

function ErrorForms({children}: ErrorProps) {

  return (
    <S.Error>
      {children}
    </S.Error>
  )
}


export default ErrorForms