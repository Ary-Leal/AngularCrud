import {InMemoryDbService} from "angular-in-memory-web-api";
import {Contato} from "./Models/contato.models";


export class InMemoryDatabase implements InMemoryDbService {

  createDb(){

     const contatos: Contato[] = [
       {id:0},
     ];

     return {contatos }
    }
      
}