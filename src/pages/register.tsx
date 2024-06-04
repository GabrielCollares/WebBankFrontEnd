
import './register.css'
import img1 from "../assets/Designer (1).jpeg"
import { useState } from 'react'
import axios, { Axios, AxiosError } from 'axios';

function RegisterPage() {

    const [cpf, setCpf] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

 async function handleSubmit (e:any){
e.preventDefault()
const formData = {
    cpf ,
    name ,
    phone ,
    email ,
    password
}

try  {

    const response = await axios.post("http://localhost:5097/register", formData) 
    console.log(response.data)
} catch (error) {

    console.error(error as AxiosError)
    
}


 }

    return (

        <>
        <section className="section3">
        <div className="Conteiner">
            <div className="cardRegister">
            <h1 className="textcard3">Fill in the fields below<br></br> to request  your Account and <br></br>Credit Card</h1>
                
                <img className="imgcard3" src={img1} ></img>
                </div>
        <div className='formulariodiv'>
    <form className="formulario" onSubmit={handleSubmit}>

        <div className="single-input ">
        <label htmlFor="cpf">CPF</label>
        <input className="input"  type="text" id="cpf" name="cpf" required onChange={e => setCpf(e.target.value)} value={cpf} ></input>
        </div>
        <div className="single-input ">
        <label htmlFor="nome">Full Name</label>
        <input className="input" type="text" id="nome" name="nome" required onChange={e => setName(e.target.value)} value={name}></input>
        </div>
        <div className='single-input'>
        <label htmlFor="celular">Phone-Number</label>
        <input className="input" type="tel" id="celular" name="celular" required onChange={e => setPhone(e.target.value)} value={phone}></input>
        </div>
        <div className="single-input">
        <label htmlFor="email">E-mail</label>
        <input className="input" type="email" id="email" name="email" required onChange={e => setEmail(e.target.value)} value={email}></input>
        </div>
        {/* <div className='single-input'>
        <label htmlFor="email-confirm">E-mail Confirm</label>
        <input className="input" type="email" id="email_confirmacao" name="email_confirmacao" required v></input>
        </div> */}
        <div className='single-input'>
        <label htmlFor="password">Password</label>
        <input className="input" type="password" id="password" name="password" required onChange={e => setPassword(e.target.value)} value={password}></input>
        </div>
        {/* <div className='single-input' >
        <label htmlFor="">Password Confirm</label>
        <input className="input" type="password" id="confirm_password" name="confirm_password" required value={}></input>
        </div> */}





<div className="checkbox-wpp">
<input className="inputcheck" type="checkbox" id="aceito_comunicacao" name="aceito_comunicacao"></input>
        <label htmlFor="aceito_comunicacao">I agree to receive communications from Sharpbank via WhatsApp.</label>
       
        </div>
        <div className="checkbox-condiction">
        <input className="inputcheck" type="checkbox" id="aceite_dados" name="aceite_dados" required></input>
        <label htmlFor="aceite_dados">I have read, I am aware of the conditions for processing my personal data and I give my consent, when applicable, as described in this Privacy Policy.</label>
        </div>
 
        <button type="submit" >Enviar</button>
    </form>
    </div>
            </div>
    
    </section>
        </>
    )
}

export default RegisterPage