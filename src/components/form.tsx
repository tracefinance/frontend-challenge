import { css, styled } from "../../styles/stitches.config";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import api from "../../pages/api/api";
import { useRouter } from "next/router";
import InputMask from "react-input-mask";
import { Countries } from "./countries";

type IFormState = {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirthday: string;
  password: string;
  country: string;
  bio: string;
  receiveNotifications: boolean;
};

const Form = styled("form", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
});

const inputNotLabel = css({
  backgroundColor: "$inputColor",
  border: "1.5px solid $borderInputColor",
  borderRadius: "8px",
  height: "50px",
  width: "100%",
  marginBottom: "16px",
  padding: "9px 16px",
  fontFamily: "Poppins",
  fontWeight: 300,
  fontSize: "14px",
  lineHeight: "130%",
  color: "$textColor",

  "@sm" : {
    height: "45px"
  },

  
  
});

const inputWithLabel = css({
  backgroundColor: "$inputColor",
  border: "1.5px solid $borderInputColor",
  borderRadius: "8px",
  height: "50px",
  width: "100%",
  marginBottom: "16px",
  padding: "12px 16px 0 16px",
  fontFamily: "Poppins",
  fontWeight: 300,
  fontSize: "14px",
  lineHeight: "130%",
  color: "$textColor",
  "@sm" : {
    height: "45px"
  },

  "&::focus": {
    border: "1.5px solid $focusBorder",
    top: "-50%",
    transition: "0.2s",
  },

});

const inputWithLabelError = css({
  backgroundColor: "$inputColor",
  border: "1.5px solid #FA4D56",
  borderRadius: "8px",
  height: "50px",
  width: "100%",
  marginBottom: "10px",
  padding: "12px 16px 0 16px",
  fontFamily: "Poppins",
  fontWeight: 300,
  fontSize: "14px",
  lineHeight: "130%",
  color: "$textColor",
  "@sm" : {
    height: "45px"
  },


});

const checkboxArea = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

});

const Select = styled("select", {
  backgroundColor: "$inputColor",
  border: "1px solid $borderInputColor",
  borderRadius: "8px",
  height: "50px",
  width: "100%",
  marginBottom: "16px",
  padding: "9px 16px",
  fontFamily: "Poppins",
  fontWeight: 300,
  fontSize: "14px",
  lineHeight: "130%",
  color: "$textColor",
  "@sm" : {
    height: "45px"
  },
  
});

const Option = styled("option", {
  backgroundColor: "$inputColor",
  border: "1px solid $borderInputColor",
  borderRadius: "8px",
  height: "50px",
  width: "100%",
  marginBottom: "16px",
  padding: "9px 16px",
  fontFamily: "Poppins",
  fontWeight: 300,
  fontSize: "14px",
  lineHeight: "130%",
  color: "#$textColor",
  "@sm" : {
    height: "45px"
  },

});

const textArea = css({
  backgroundColor: "$inputColor",
  border: "1px solid $borderInputColor",
  borderRadius: "8px",
  width: "100%",
  marginBottom: "16px",
  padding: "9px 16px",
  fontFamily: "Poppins",
  fontWeight: 300,
  fontSize: "14px",
  lineHeight: "130%",
  color: "$textColor",

});

const textAreaWithLabel = css({
  backgroundColor: "$inputColor",
  border: "1px solid $borderInputColor",
  borderRadius: "8px",
  width: "100%",
  marginBottom: "16px",
  padding: "18px 16px 0 16px",
  fontFamily: "Poppins",
  fontWeight: 300,
  fontSize: "14px",
  lineHeight: "130%",
  color: "#ffffff",

});

const withLabel = css({
  fontSize: "12px",
  fontFamily: "Poppins",
  fontWeight: 500,
  color: "$label",
  marginRight: "-54px",
  zIndex: 1,
  padding: "4px 0 0 18px",
  width: "50%",
  height: 20,
  position: "absolute",
  display: "flex"

});

const notLabel = css({
  display: "none",
});

const label = css({
  display: "flex",
  width: "100%",
});

const naoPreenchido = css({
  backgroundColor: "$border",
  border: "none",
  borderRadius: "8px",
  height: "50px",
  width: "100%",
  marginBottom: "25px",
  padding: "16px 24px",
  fontFamily: "Poppins",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "130%",
  color: "#888888",
});

const buttonActive = css({
  backgroundColor: "$verde",
  border: "none",
  borderRadius: "8px",
  height: "50px",
  width: "100%",
  marginBottom: "25px",
  padding: "16px 24px",
  fontFamily: "Poppins",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "130%",
  color: "#000000",
  cursor: "pointer",
});

const ErrorArea = styled("div",{
  display:"flex",
  flexDirection: "column",
  width: "100%",
  padding: "0 0 10px 0"

});

const Error = styled("div",{
  color: "$error",
  fontFamily: 'Poppins',
fontFtyle: "normal",
fontWeight: 400,
fontSize: '12px',
lineHeight: '130%',
});

const Paragrafo = styled("p", {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: "14px",
  lineHeight: "130%",
  color: "#E7E7E7",
  marginLeft: 10,
});

const Image = styled("img", {
  margin: "0 0 15px -40px",
  cursor: "pointer",
});

function Formulario() {
  const { register, handleSubmit } = useForm<IFormState>();
  const Router = useRouter();

  const [firstNameLabel, setFirstNameLabel] = useState(false);
  const [lastNameLabel, setLastNameLabel] = useState(false);
  const [emailLabel, setEmailLabel] = useState(false);
  const [passwordLabel, setPasswordLabel] = useState(false);
  const [bioLabel, setBioLabel] = useState(false);
  const [dateOfBirthdayLabel, setDateOfBirthdayLabel] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [preenchido, setPreenchido] = useState(false);

  // Ao enviar o formulario, ver se aconteceu algum erro, caso Não, redirecionar para a tela de Bem Vindo
  const onSubmit: SubmitHandler<IFormState> = async (data) => {
    if (formState.email.includes("@")) {
      try {
        const response = await api.post(`/user`, data);
        console.log(response.data);
        Router.push(`/user/${response.data.id}`);
      } catch (e) {
        console.log("Preencha todos os campos");
      }
    } else setError(true);
  };

  const [formState, setFormState] = useState<IFormState>({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirthday: "",
    password: "",
    country: "",
    bio: "",
    receiveNotifications: false,
  });


  //Função que atualiza a cada alteração feita nos inputs
  const changeForm = (e: any) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });

    //Condição que habilita o botão do formulario somente se todos os campos forem preenchidos
    if (
      formState.firstName != "" &&
      formState.lastName != "" &&
      formState.email != "" &&
      formState.dateOfBirthday != "" &&
      formState.password != "" &&
      formState.country != "" &&
      formState.bio != ""
    ) {
      setPreenchido(true);
    } else setPreenchido(false);

    //Condições que habilitam um novo estilo aos inputs, adicionando um Título a eles ao digitarem algo
    if (formState.firstName != "") {
      setFirstNameLabel(true);
    } else {
      setFirstNameLabel(false);
    }

    if (formState.lastName != "") {
      setLastNameLabel(true);
    } else {
      setLastNameLabel(false);
    }

    if (formState.email != "") {
      setEmailLabel(true);
    } else {
      setEmailLabel(false);
    }

    if (formState.password != "") {
      setPasswordLabel(true);
    } else {
      setPasswordLabel(false);
    }

    if (formState.dateOfBirthday != "") {
      setDateOfBirthdayLabel(true);
    } else {
      setDateOfBirthdayLabel(false);
    }

    if (formState.bio != "") {
      setBioLabel(true);
    } else {
      setBioLabel(false);
    }
  };



  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className={label()}>
        <label className={firstNameLabel ? `${withLabel}` : `${notLabel}`}>
          Nome
        </label>
        <input
          {...register("firstName")}
          className={firstNameLabel ? `${inputWithLabel}` : `${inputNotLabel}`}
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Nome"
          value={formState.firstName}
          onChange={changeForm}
        />
      </div>
      <div className={label()}>
        <label className={lastNameLabel ? `${withLabel}` : `${notLabel}`}>
          Sobrenome
        </label>
        <input
          {...register("lastName")}
          className={lastNameLabel ? `${inputWithLabel}` : `${inputNotLabel}`}
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Sobrenome"
          value={formState.lastName}
          onChange={changeForm}
        />
      </div>

      <div className={label()}>
        {error ? (
          <ErrorArea>
            <div>
              <label className={withLabel()}>
                E-mail <Error>*</Error>
              </label>
              <input
                {...register("email")}
                className={inputWithLabelError()}
                type="text"
                id="email"
                name="email"
                placeholder="E-mail"
                value={formState.email}
                onChange={changeForm}
              />
            </div>

            <Error>E-mail inválido</Error>
          </ErrorArea>
        ) : (
          <>
            <label className={emailLabel ? `${withLabel}` : `${notLabel}`}>
              E-mail
            </label>
            <input
              {...register("email")}
              className={emailLabel ? `${inputWithLabel}` : `${inputNotLabel}`}
              type="text"
              id="email"
              name="email"
              placeholder="E-mail"
              value={formState.email}
              onChange={changeForm}
            />
          </>
        )}
      </div>

      <div className={label()}>
        <label className={dateOfBirthdayLabel ? `${withLabel}` : `${notLabel}`}>
          Data de nascimento
        </label>
        <InputMask
          mask="99/99/9999"
          {...register("dateOfBirthday")}
          className={
            dateOfBirthdayLabel ? `${inputWithLabel}` : `${inputNotLabel}`
          }
          type="text"
          id="dateOfBirthday"
          name="dateOfBirthday"
          placeholder="Data de nascimento"
          value={formState.dateOfBirthday}
          onChange={changeForm}
        />
      </div>
      <div className={label()}>
        <label className={passwordLabel ? `${withLabel}` : `${notLabel}`}>
          Senha
        </label>
        <input
          {...register("password")}
          className={passwordLabel ? `${inputWithLabel}` : `${inputNotLabel}`}
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          placeholder="Senha"
          value={formState.password}
          onChange={changeForm}
        />
        {showPassword ? (
          <Image
            src="/images/eyeClosed.svg"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <Image
            src="/images/eye.svg"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>
      <Select
        {...register("country")}
        id="country"
        name="country"
        placeholder="Selecione seu país"
        value={formState.country}
        onChange={changeForm}
      >
        <Option value="" disabled>
          Selecione um país
        </Option>
        {Countries.map((pais) => {
          return (
            <>
              <Option value={pais.value}>{pais.text}</Option>
            </>
          );
        })}
      </Select>
      <div className={label()}>
        <label className={bioLabel ? `${withLabel}` : `${notLabel}`}>Bio</label>
        <textarea
          {...register("bio")}
          className={bioLabel ? `${textAreaWithLabel}` : `${textArea}`}
          id="bio"
          name="bio"
          rows={3}
          placeholder="Bio"
          value={formState.bio}
          onChange={changeForm}
        ></textarea>
      </div>
      <button
        className={preenchido ? `${buttonActive()}` : `${naoPreenchido()}`}
        type="submit"
        disabled={!preenchido}
      >
        Cadastrar
      </button>
      <div className={checkboxArea()}>
        <input
          {...register("receiveNotifications")}
          type="checkbox"
          checked={formState.receiveNotifications}
          name="receiveNotifications"
          id="receiveNotifications"
          onChange={(event) =>
            setFormState({
              ...formState,
              receiveNotifications: !!event.currentTarget?.checked,
            })
          }
        />
        <Paragrafo>Desejo receber notificações</Paragrafo>
      </div>
    </Form>
  );
}

export default Formulario;
