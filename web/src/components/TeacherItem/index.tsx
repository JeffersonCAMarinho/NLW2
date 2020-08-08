import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem(){
  return (
    <article className="teacher-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/32003507?s=460&u=3fabc06856a4e89cbefc7bb14510bb709210cfa8&v=4" alt="Jefferson Marinho"/>
              <div>
                <strong>Jefferson Marinho</strong>
                <span>Manutencao de Computadores</span>

              </div>
            </header>
            <p>
              Estudante de computacao precisando de jobs
              <br/><br/>
            Busco ensinar as pessoas como fazer a manutencao de seus computadores pessoais e 
            se tornar o sobrinho do TI que formata PC de graca pra familia
            </p>
            <footer>
              <p>
                Preco/Hora
                <strong>R$ 150,00</strong>
              </p>
              <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
              </button>
            </footer>
          </article>
  )
}

export default TeacherItem;