import { Component, OnInit, AfterContentInit, ContentChild, Input } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'mt-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {
  
  @ContentChild(NgModel) model: NgModel
  @ContentChild(FormControlName) control: FormControlName

  @Input() input: any
  label: string

  ngAfterContentInit() {
    this.input = this.model || this.control
    if(this.input === undefined) {
      throw new Error('Esse componenete deve ser usado com uma diretiva.');
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
