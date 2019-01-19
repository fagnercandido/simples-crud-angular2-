import { Injectable } from "@angular/core";
import {Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Pessoa } from "./pessoa.model";

@Injectable()
export class PessoaService {

    constructor(private http: Http){

    }

    adicionarPessoa(pessoa: Pessoa): Observable<string> {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http.post('http://localhost:3000/pessoas', JSON.stringify(pessoa), new RequestOptions({headers: headers}))
            .map(response => response.json())
    }

    listar(): Observable<string> {
        return this.http.get('http://localhost:3000/pessoas').map(response => response.json())
    }

}