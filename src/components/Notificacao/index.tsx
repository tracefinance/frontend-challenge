import { toast } from 'react-toastify';



function Notificacao(mensagem:string, status:boolean) {

  return (
    <>
      {status 
        ? (toast.success(mensagem,{
          position: "top-right",
          autoClose: 1500,
        })) 
        : (toast.error(mensagem,{
          position: "top-right",
          autoClose: 1500,
        }))}
    </>
  )
}



export default Notificacao