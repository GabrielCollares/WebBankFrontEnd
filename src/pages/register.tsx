import React from 'react'
import ReactDOM from 'react-dom/client'
import './register.css'

function RegisterPage() {

    return (

        <>
        <section className="section3">
        <div className="Conteiner">
            <div className="cardRegister">
            <h1 className="textcard3">Fill in the fields below<br></br> to request  your Account and <br></br>Credit Card</h1>
                
                <img className="imgcard3" src="https://cdn.dribbble.com/userupload/4106610/file/original-eba89bf53a826987d14538e9a8fe3bde.png?resize=1024x768" ></img>
                </div>
        <div className='formulariodiv'>
    <form className="formulario">

        <div className="single-input">
        <label htmlFor="cpf">CPF</label>
        <input className="input" type="text" id="cpf" name="cpf" required></input>
        </div>
        <div className="single-input">
        <label htmlFor="nome">Nome completo</label>
        <input className="input" type="text" id="nome" name="nome" required></input>
        </div>
        <div className='single-input'>
        <label htmlFor="celular">Celular</label>
        <input className="input" type="tel" id="celular" name="celular" required></input>
        </div>
        <div className="single-input">
        <label htmlFor="email">E-mail</label>
        <input className="input" type="email" id="email" name="email" required></input>
        </div>
        <div className='singleinput'>
        <label htmlFor="email-confirm">Confirmação de e-mail</label>
        <input className="input" type="email" id="email_confirmacao" name="email_confirmacao" required></input>
        </div>
        <div className='single-input'>
        <label htmlFor="password">Password</label>
        <input className="input" type="password" id="password" name="password" required></input>
        </div>
        <div className='single-input'>
        <label htmlFor="">Password Confirm</label>
        <input className="input" type="password" id="confirm_password" name="confirm_password" required></input>
        </div>





<div className="checkbox-wpp">
<input className="inputcheck" type="checkbox" id="aceito_comunicacao" name="aceito_comunicacao"></input>
        <label htmlFor="aceito_comunicacao">Aceito receber comunicações do Sharpbank por WhatsApp.</label>
       
        </div>
        <div className="checkbox-condiction">
        <input className="inputcheck" type="checkbox" id="aceite_dados" name="aceite_dados" required></input>
        <label htmlFor="aceite_dados">Li, estou ciente das condições de tratamento dos meus dados pessoais e dou meu consentimento, quando aplicável, conforme descrito nesta Política de Privacidade.</label>
        </div>
  
        <button type="submit">Enviar</button>
    </form>
    </div>
            </div>
    
    </section>
        </>
    )
}

export default RegisterPage