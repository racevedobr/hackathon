import React from 'react';

import { Link } from 'react-router-dom';

import logo from '~/assets/h2h_logo4.png';

export default function Signin() {
  return (
    <>
      <img src={logo} alt="Help 2 Hire" />

      <form>
        <input type="checkbox" name="cadidato" id="cadidato" />
        <label htmlFor="cadidato">Candidato</label>
        <input type="checkbox" name="empresa" id="empresa" />
        <label htmlFor="empresa">Empresa</label>
        <input type="email" placeholder="Seu e-mail" id="email-login" />
        <button type="submit">Login</button>

        <Link to="/register">Criar sua conta</Link>
      </form>
    </>
  );
}
