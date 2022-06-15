export function mascaraDataNascimento(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 10
  let value = e.currentTarget.value
  value = value.replace(/\D/g, "").replace(/^(\d{10})/, '$1').replace(/^(\d{2})(\d{2})(\d)/, '$1/$2/$3')
  e.currentTarget.value = value
  
}