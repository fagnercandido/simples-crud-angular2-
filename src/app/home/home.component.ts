import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pessoa } from './pessoa.model';
import { PessoaService } from './pessoa.service';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  homeForm: FormGroup

  constructor(private pessoaService: PessoaService, private router: Router, private formBuilder: FormBuilder) { }

  adicionar(form: Pessoa) {
    console.log(form)
    this.pessoaService.adicionarPessoa(new Pessoa(form.nome, form.sobrenome, form.idade)).subscribe((item: string) => {
      this.router.navigate(['listagem'])
      console.log(item)
    })
  }

  ngOnInit() {
    this.homeForm = this.formBuilder.group({
      nome: this.formBuilder.control('', Validators.required),
      sobrenome: this.formBuilder.control(''),
      idade: this.formBuilder.control('')
    })
  }

}
