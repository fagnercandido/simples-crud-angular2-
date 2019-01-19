import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Welcome of the Crud Simples!'

  constructor() { }

  ngOnInit() {
  }

}
