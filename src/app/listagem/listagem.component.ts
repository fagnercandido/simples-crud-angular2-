import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'app/home/pessoa.service';

@Component({
  selector: 'mt-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  lista: string

  constructor(private pessoaService: PessoaService) { }


  ngOnInit() {
    this.pessoaService.listar().subscribe(lista => this.lista = lista)
  }

}
