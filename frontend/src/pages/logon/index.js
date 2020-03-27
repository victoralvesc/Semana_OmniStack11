import React from 'react';
import {FiLogIn} from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    return (
       <div className= "Logon-container">
           <section className="form">

           <img src={logoImg} alt="Be The Hero" />
            <form>
                <h1>Faça seu Logon</h1>

                <input placeholder="Informe seu ID" />
                <button className="button" type="submit">Entrar</button>
                <a href="/register" >
                    <FiLogIn size={16} color="#E02041" />
                    Não tenho Cadastro
                </a>
            </form>
           </section>
   
            <img src={heroesImg} alt="Heroes" />
       </div>
    ); 
}