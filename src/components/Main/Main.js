import React from 'react';
import './Main.css'
import {FaPlus} from 'react-icons/fa'

// import { Container } from './styles';

export default function Main() {

    const handleSubmit=()=>{

    }

  return (
      <div className="main">  
          <h1>Lista de Tarefas</h1> 

             <form action="/" className="form" onSubmit={handleSubmit}>
          <input type="text"/>
          <button type="submit"><FaPlus/></button>
      </form>

      <ul className="tarefas">


      </ul>

      </div>

  )
}
