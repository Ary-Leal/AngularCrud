import { Contato } from "../Models/contato.models";
import { HttpClient, HttpHeaders } from '@angular/common/http';    
import { Injectable } from "@angular/core";
import {Observable, throwError} from "rxjs"
import {map, catchError, flatMap} from "rxjs/operators";

@Injectable({
  providedIn : 'root'
})

export class ContatoService{

   private apiPath : string = "api/contatos";

   constructor (private http: HttpClient) {}

   retornarTodos(): Observable<Contato[]> {
     return this.http.get(this.apiPath).pipe(
       catchError(this.handleError),
       map(this.jsonDataToContatos)
     )
   }
    buscarPorId(Id: number): Observable<Contato>{
        const url = '${this.apiPath}/${id}';

        return this.http.get(url).pipe(
          catchError(this.handleError),
          map(this.jsonDataToContato)
        )

    }  

    gravar(contato: Contato): Observable<Contato>{

      return this.http.post(this.apiPath, contato).pipe(
        catchError(this.handleError),
        map(this.jsonDataToContato)
      )
    }

     
   

    atualizar (contato: Contato): Observable<Contato>{
      const url = '${this.apiPath}/${contato.id}';

      return this.http.post(url, contato).pipe(
        catchError(this.handleError),
        map(() => contato)
      )

    }
 deletar (Id: number): Observable<any>{
  const url = '${this.apiPath}/${id}';

  return this.http.delete(url).pipe(
    catchError(this.handleError),
    map(() => null)
  )
  }

  //metodos privados 

  private jsonDataToContatos(jsonData: any[]): Contato[]{
     const contatos: Contato[]=[];
      jsonData.forEach(element => contatos.push(element as Contato));
      return contatos;
    }
  private jsonDataToContato(jsonData: any): Contato{
    return jsonData as Contato ;
  }

  private handleError (error: any): Observable<any>{
       console.log("ERRO NA REQUISAO =>", error);
       return throwError(error)
  }
}  

 


    


