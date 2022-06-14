import type { NextPage } from "next";
import { useState, useMemo } from "react";
import Select from "react-select";
import Head from "next/head";

const Home: NextPage = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    lastName: "",
    email: "",
    dateOfBirthday: "",
    password: "",
    country: "",
    bio: "",
    receiveNotifications: "",
  });

  const countryOptions = [
    { value: "Brasil", label: "Brasil" },
    { value: "Afeganistão", label: "Afeganistão" },
    { value: "África do Sul", label: "África do Sul" },
    { value: "Albânia", label: "Albânia" },
    { value: "Alemanha", label: "Alemanha" },
    { value: "Andorra", label: "Andorra" },
    { value: "Angola", label: "Angola" },
    { value: "Anguilla", label: "Anguilla" },
    { value: "Antilhas Holandesas", label: "Antilhas Holandesas" },
    { value: "Antárctida", label: "Antárctida" },
    { value: "Antígua e Barbuda", label: "Antígua e Barbuda" },
    { value: "Argentina", label: "Argentina" },
    { value: "Argélia", label: "Argélia" },
    { value: "Armênia", label: "Armênia" },
    { value: "Aruba", label: "Aruba" },
    { value: "Arábia Saudita", label: "Arábia Saudita" },
    { value: "Austrália", label: "Austrália" },
    { value: "Áustria", label: "Áustria" },
    { value: "Azerbaijão", label: "Azerbaijão" },
    { value: "Bahamas", label: "Bahamas" },
    { value: "Bahrein", label: "Bahrein" },
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "Barbados", label: "Barbados" },
    { value: "Belize", label: "Belize" },
    { value: "Benim", label: "Benim" },
    { value: "Bermudas", label: "Bermudas" },
    { value: "Bielorrússia", label: "Bielorrússia" },
    { value: "Bolívia", label: "Bolívia" },
    { value: "Botswana", label: "Botswana" },
    { value: "Brunei", label: "Brunei" },
    { value: "Bulgária", label: "Bulgária" },
    { value: "Burkina Faso", label: "Burkina Faso " },
    { value: "Burundi", label: "Burundi" },
    { value: "Butão", label: "Butão" },
    { value: "Bélgica", label: "Bélgica" },
    { value: "Bósnia e Herzegovina", label: "Bósnia e Herzegovina" },
    { value: "Cabo Verde", label: "Cabo Verde" },
    { value: "Camarões", label: "Camarões" },
    { value: "Camboja", label: "Camboja" },
    { value: "Canadá", label: "Canadá" },
    { value: "Catar", label: "Catar" },
    { value: "Cazaquistão", label: "Cazaquistão" },
    { value: "Chade", label: "Chade" },
    { value: "Chile", label: "Chile" },
    { value: "China", label: "China" },
    { value: "Chipre", label: "Chipre" },
    { value: "Colômbia", label: "Colômbia" },
    { value: "Comores", label: "Comores" },
    { value: "Coreia do Norte", label: "Coreia do Norte" },
    { value: "Coreia do Sul", label: "Coreia do Sul" },
    { value: "Costa do Marfim", label: "Costa do Marfim" },
    { value: "Costa Rica", label: "Costa Rica" },
    { value: "Croácia", label: "Croácia" },
    { value: "Cuba", label: "Cuba" },
    { value: "Dinamarca", label: "Dinamarca" },
    { value: "Djibouti", label: "Djibouti" },
    { value: "Dominica", label: "Dominica" },
    { value: "Egito", label: "Egito" },
    { value: "El Salvador", label: "El Salvador" },
    { value: "Emirados Árabes Unidos", label: "Emirados Árabes Unidos" },
    { value: "Equador", label: "Equador" },
    { value: "Eritreia", label: "Eritreia" },
    { value: "Escócia", label: "Escócia" },
    { value: "Eslováquia", label: "Eslováquia" },
    { value: "Eslovênia", label: "Eslovênia" },
    { value: "Espanha", label: "Espanha" },
    {
      value: "Estados Federados da Micronésia",
      label: "Estados Federados da Micronésia",
    },
    { value: "Estados Unidos", label: "Estados Unidos" },
    { value: "Estônia", label: "Estônia" },
    { value: "Etiópia", label: "Etiópia" },
    { value: "Fiji", label: "Fiji" },
    { value: "Filipinas", label: "Filipinas" },
    { value: "Finlândia", label: "Finlândia" },
    { value: "França", label: "França" },
    { value: "Gabão", label: "Gabão" },
    { value: "Gana", label: "Gana" },
    { value: "Geórgia", label: "Geórgia" },
    { value: "Gibraltar", label: "Gibraltar" },
    { value: "Granada", label: "Granada" },
    { value: "Gronelândia", label: "Gronelândia" },
    { value: "Grécia", label: "Grécia" },
    { value: "Guadalupe", label: "Guadalupe" },
    { value: "Guam", label: "Guam" },
    { value: "Guatemala", label: "Guatemala" },
    { value: "Guernesei", label: "Guernesei" },
    { value: "Guiana", label: "Guiana" },
    { value: "Guiana Francesa", label: "Guiana Francesa" },
    { value: "Guiné", label: "Guiné" },
    { value: "Guiné Equatorial", label: "Guiné Equatorial" },
    { value: "Guiné-Bissau", label: "Guiné-Bissau" },
    { value: "Gâmbia", label: "Gâmbia" },
    { value: "Haiti", label: "Haiti" },
    { value: "Honduras", label: "Honduras" },
    { value: "Hong Kong", label: "Hong Kong" },
    { value: "Hungria", label: "Hungria" },
    { value: "Ilha Bouvet", label: "Ilha Bouvet" },
    { value: "Ilha de Man", label: "Ilha de Man" },
    { value: "Ilha do Natal", label: "Ilha do Natal" },
    {
      value: "Ilha Heard e Ilhas McDonald",
      label: "Ilha Heard e Ilhas McDonald",
    },
    { value: "Ilha Norfolk", label: "Ilha Norfolk" },
    { value: "Ilhas Cayman", label: "Ilhas Cayman" },
    { value: "Ilhas Cocos (Keeling)", label: "Ilhas Cocos (Keeling)" },
    { value: "Ilhas Cook", label: "Ilhas Cook" },
    { value: "Ilhas Feroé", label: "Ilhas Feroé" },
    {
      value: "Ilhas Geórgia do Sul e Sandwich do Sul",
      label: "Ilhas Geórgia do Sul e Sandwich do Sul",
    },
    { value: "Ilhas Malvinas", label: "Ilhas Malvinas" },
    { value: "Ilhas Marshall", label: "Ilhas Marshall" },
    {
      value: "Ilhas Menores Distantes dos Estados Unidos",
      label: "Ilhas Menores Distantes dos Estados Unidos",
    },
    { value: "Ilhas Salomão", label: "Ilhas Salomão" },
    { value: "Ilhas Virgens Americanas", label: "Ilhas Virgens Americanas" },
    { value: "Ilhas Virgens Britânicas", label: "Ilhas Virgens Britânicas" },
    { value: "Ilhas Åland", label: "Ilhas Åland" },
    { value: "Indonésia", label: "Indonésia" },
    { value: "Inglaterra", label: "Inglaterra" },
    { value: "Índia", label: "Índia" },
    { value: "Iraque", label: "Iraque" },
    { value: "Irlanda do Norte", label: "Irlanda do Norte" },
    { value: "Irlanda", label: "Irlanda" },
    { value: "Irã", label: "Irã" },
    { value: "Islândia", label: "Islândia" },
    { value: "Israel", label: "Israel" },
    { value: "Itália", label: "Itália" },
    { value: "Iêmen", label: "Iêmen" },
    { value: "Jamaica", label: "Jamaica" },
    { value: "Japão", label: "Japão" },
    { value: "Jersey", label: "Jersey" },
    { value: "Jordânia", label: "Jordânia" },
    { value: "Kiribati", label: "Kiribati" },
    { value: "Kuwait", label: "Kuwait" },
    { value: "Laos", label: "Laos" },
    { value: "Lesoto", label: "Lesoto" },
    { value: "Letônia", label: "Letônia" },
    { value: "Libéria", label: "Libéria" },
    { value: "Liechtenstein", label: "Liechtenstein" },
    { value: "Lituânia", label: "Lituânia" },
    { value: "Luxemburgo", label: "Luxemburgo" },
    { value: "Líbano", label: "Líbano" },
    { value: "Líbia", label: "Líbia" },
    { value: "Macau", label: "Macau" },
    { value: "Macedônia", label: "Macedônia" },
    { value: "Madagáscar", label: "Madagáscar" },
    { value: "Malawi", label: "Malawi" },
    { value: "Maldivas", label: "Maldivas" },
    { value: "Mali", label: "Mali" },
    { value: "Malta", label: "Malta" },
    { value: "Malásia", label: "Malásia" },
    { value: "Marianas Setentrionais", label: "Marianas Setentrionais" },
    { value: "Marrocos", label: "Marrocos" },
    { value: "Martinica", label: "Martinica" },
    { value: "Mauritânia", label: "Mauritânia" },
    { value: "Maurícia", label: "Maurícia" },
    { value: "Mayotte", label: "Mayotte" },
    { value: "Moldávia", label: "Moldávia" },
    { value: "Mongólia", label: "Mongólia" },
    { value: "Montenegro", label: "Montenegro" },
    { value: "Montserrat", label: "Montserrat" },
    { value: "Moçambique", label: "Moçambique" },
    { value: "Myanmar", label: "Myanmar" },
    { value: "México", label: "México" },
    { value: "Mônaco", label: "Mônaco" },
    { value: "Namíbia", label: "Namíbia" },
    { value: "Nauru", label: "Nauru" },
    { value: "Nepal", label: "Nepal" },
    { value: "Nicarágua", label: "Nicarágua" },
    { value: "Nigéria", label: "Nigéria" },
    { value: "Niue", label: "Niue" },
    { value: "Noruega", label: "Noruega" },
    { value: "Nova Caledônia", label: "Nova Caledônia" },
    { value: "Nova Zelândia", label: "Nova Zelândia" },
    { value: "Níger", label: "Níger" },
    { value: "Omã", label: "Omã" },
    { value: "Palau", label: "Palau" },
    { value: "Palestina", label: "Palestina" },
    { value: "Panamá", label: "Panamá" },
    { value: "Papua-Nova Guiné", label: "Papua-Nova Guiné" },
    { value: "Paquistão", label: "Paquistão" },
    { value: "Paraguai", label: "Paraguai" },
    { value: "País de Gales", label: "País de Gales" },
    { value: "Países Baixos", label: "Países Baixos" },
    { value: "Peru", label: "Peru" },
    { value: "Pitcairn", label: "Pitcairn" },
    { value: "Polinésia Francesa", label: "Polinésia Francesa" },
    { value: "Polônia", label: "Polônia" },
    { value: "Porto Rico", label: "Porto Rico" },
    { value: "Portugal", label: "Portugal" },
    { value: "Quirguistão", label: "Quirguistão" },
    { value: "Quênia", label: "Quênia" },
    { value: "Reino Unido", label: "Reino Unido" },
    { value: "República Centro-Africana", label: "República Centro-Africana" },
    { value: "República Checa", label: "República Checa" },
    {
      value: "República Democrática do Congo",
      label: "República Democrática do Congo",
    },
    { value: "República do Congo", label: "República do Congo" },
    { value: "República Dominicana", label: "República Dominicana" },
    { value: "Reunião", label: "Reunião" },
    { value: "Romênia", label: "Romênia" },
    { value: "Ruanda", label: "Ruanda" },
    { value: "Rússia", label: "Rússia" },
    { value: "Saara Ocidental", label: "Saara Ocidental" },
    { value: "Saint Martin", label: "Saint Martin" },
    { value: "Saint-Barthélemy", label: "Saint-Barthélemy" },
    { value: "Saint-Pierre e Miquelon", label: "Saint-Pierre e Miquelon" },
    { value: "Samoa Americana", label: "Samoa Americana" },
    { value: "Samoa", label: "Samoa" },
    {
      value: "Santa Helena, Ascensão e Tristão da Cunha",
      label: "Santa Helena, Ascensão e Tristão da Cunha",
    },
    { value: "Santa Lúcia", label: "Santa Lúcia" },
    { value: "Senegal", label: "Senegal" },
    { value: "Serra Leoa", label: "Serra Leoa" },
    { value: "Seychelles", label: "Seychelles" },
    { value: "Singapura", label: "Singapura" },
    { value: "Somália", label: "Somália" },
    { value: "Sri Lanka", label: "Sri Lanka" },
    { value: "Suazilândia", label: "Suazilândia" },
    { value: "Sudão", label: "Sudão" },
    { value: "Suriname", label: "Suriname" },
    { value: "Suécia", label: "Suécia" },
    { value: "Suíça", label: "Suíça" },
    { value: "Svalbard e Jan Mayen", label: "Svalbard e Jan Mayen" },
    { value: "São Cristóvão e Nevis", label: "São Cristóvão e Nevis" },
    { value: "São Marino", label: "São Marino" },
    { value: "São Tomé e Príncipe", label: "São Tomé e Príncipe" },
    { value: "São Vicente e Granadinas", label: "São Vicente e Granadinas" },
    { value: "Sérvia", label: "Sérvia" },
    { value: "Síria", label: "Síria" },
    { value: "Tadjiquistão", label: "Tadjiquistão" },
    { value: "Tailândia", label: "Tailândia" },
    { value: "Taiwan", label: "Taiwan" },
    { value: "Tanzânia", label: "Tanzânia" },
    {
      value: "Terras Austrais e Antárticas Francesas",
      label: "Terras Austrais e Antárticas Francesas",
    },
    {
      value: "Território Britânico do Oceano Índico",
      label: "Território Britânico do Oceano Índico",
    },
    { value: "Timor-Leste", label: "Timor-Leste" },
    { value: "Togo", label: "Togo" },
    { value: "Tonga", label: "Tonga" },
    { value: "Toquelau", label: "Toquelau" },
    { value: "Trinidad e Tobago", label: "Trinidad e Tobago" },
    { value: "Tunísia", label: "Tunísia" },
    { value: "Turcas e Caicos", label: "Turcas e Caicos" },
    { value: "Turquemenistão", label: "Turquemenistão" },
    { value: "Turquia", label: "Turquia" },
    { value: "Tuvalu", label: "Tuvalu" },
    { value: "Ucrânia", label: "Ucrânia" },
    { value: "Uganda", label: "Uganda" },
    { value: "Uruguai", label: "Uruguai" },
    { value: "Uzbequistão", label: "Uzbequistão" },
    { value: "Vanuatu", label: "Vanuatu" },
    { value: "Vaticano", label: "Vaticano" },
    { value: "Venezuela", label: "Venezuela" },
    { value: "Vietname", label: "Vietname" },
    { value: "Wallis e Futuna", label: "Wallis e Futuna" },
    { value: "Zimbabwe", label: "Zimbabwe" },
    { value: "Zâmbia", label: "Zâmbia" },
  ];

  const onChangeInput = (e) =>
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });

  const sendRegistration = async (e) => {
    e.preventDefault();
    console.log(dataForm.name);
    {
      /*try {
      const res = await fetch(
        "https://629f52338b939d3dc29519e3.mockapi.io/api/challenge/user",
        {
          method: "POST",
          body: JSON.stringify(dataForm),
        }
      );
    } catch (err) {
      console.log(err);
    }*/
    }
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="robots" content="index/follow" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="crossorigin"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="registration">
        <div className="max-width">
          <h1 className="title">Cadastre-se</h1>
          <p>Para começar, insira os dados abaixo:</p>
          <div className="registration-content">
            <div className="column-left">
              <form onSubmit={sendRegistration}>
                <input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  onChange={onChangeInput}
                  value={dataForm.name}
                ></input>
                <br />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Sobrenome"
                  onChange={onChangeInput}
                  value={dataForm.lastName}
                ></input>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  onChange={onChangeInput}
                  value={dataForm.email}
                ></input>
                <br />
                <input
                  type="date"
                  name="dateOfBirthday"
                  placeholder="Data de nascimento"
                  onChange={onChangeInput}
                  value={dataForm.dateOfBirthday}
                ></input>
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Senha"
                  onChange={onChangeInput}
                  value={dataForm.password}
                ></input>
                <br />
                <Select
                  name="country"
                  placeholder="Selecione seu país"
                  onChange={onChangeInput}
                  value={dataForm.country}
                  options={countryOptions}
                />
                <br />
                <input
                  type="text"
                  name="bio"
                  placeholder="Bio"
                  onChange={onChangeInput}
                  value={dataForm.bio}
                ></input>
                <br />
                <button type="submit">Cadastrar</button>
                <br />
                <input
                  type="checkbox"
                  name="receiveNotifications"
                  onChange={onChangeInput}
                  value={dataForm.receiveNotifications}
                ></input>{" "}
                <span>Desejo receber notificações</span>
                <br />
              </form>
            </div>
            <div className="column-right"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
