import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  //inline
  //template:"<p>empleado works!</p>",
  //styles:["p{background-color: rebeccapurple;}"]
})
export class EmpleadoComponent  {
  nombre = "Juana";
  apellido = "Solano";
  private edad = 18;
  
  getEdad(){
    return this.edad;
  }

}
