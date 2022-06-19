import React,{ useEffect, useState} from 'react';
import api from './services/api';
import './adminlte.css';

export default function App(){
  const[conta, setConta] = useState();
  const [movimento, setMovimento] = useState();

  useEffect( () => {
    api
    .get("/conta/2")
    .then((response) => setConta(response.data))
    .catch((err)=> {
    console.error("Erro de conexão com a API" + err);
   });
  }, []);

  class Conta {
    constructor(id, codigobanco, nomebanco, numero, operacao, saldo){ 
      this.id = id;
      this.codigobanco = codigobanco;
      this.nomebanco = nomebanco;
      this.numero = numero;
      this.operacao = operacao;
      this.saldo = saldo;
  }
  }

 let contaBradesco = new Conta(8, 321, "Bradesco", 654, 13, 198.5);
 console.log(contaBradesco);
 console.log(conta);
 
  return(
   <div> 
     <p> ID: {conta?.id} </p>
     <p>Código do Banco: {conta?.codigobanco}</p>
     <p>Nome do Banco: {conta?.nomebanco}</p>
     <p>Agência: {conta?.agenciabanco}</p>
     <p>Número da Conta: {conta?.numero}</p>
     <p>Operação: {conta?.operacao}</p>
     <p>Saldo: {conta?.saldo}</p>
     <br></br>
     <p>Descrição do Movimento: {movimento?.descricao} </p>
     <p>Valor do Movimento: {movimento?.valor} </p>
    </div>

    
  );

}
