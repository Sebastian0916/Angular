import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'material';

  links = [
    {
      name: "Inicio",
      url: "home"
    },
    {
      name: "Lista",
      url: "list"
    },
    {
      name: "Formulario",
      url: "form"
    }
  ]
}
