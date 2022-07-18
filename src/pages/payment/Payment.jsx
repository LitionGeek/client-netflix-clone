import React, { useState } from 'react'
import "react-credit-cards/es/styles-compiled.css"
import { Footer } from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import "./payment.scss"

const Payment = () => {
    const [creditCard, setcreditCard] = useState({
        number:"",
        name:"",
        expiry:"",
        cvc:"",
        focus:""
    })

   /*  const handleInputChange = (e)=>{
        setcreditCard({
            ...creditCard,
            [e.target.name]:e.target.value
        })
    }

    const handleFocus = (e)=>{
        setcreditCard({
            ...creditCard,
            focus:e.target.name
        })
    }

    const processPayment = ()=>{
        console.log("Pagado")
    }
 */
  return (
    <div className='payment'>
        <Navbar type={"register"}/> 
        <div className="container-payment">
            <div className="card">
                <div className="card-title">Servicio basico</div>
                <div className="card-body"><p>$1200</p></div>
                <button className='btn btn-buy'>Contratar</button>
                <div className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur fugit dolore facilis!</div>
            </div>
            <div className="card">
                <div className="card-title">Servicio Pro</div>
                <div className="card-body"><p>$2850</p></div>
                <button className='btn btn-buy'>Contratar</button>
                <div className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur fugit dolore facilis!</div>
            </div>
            
        </div> 
       <Footer /> 
    </div>
  )
}

export default Payment;
