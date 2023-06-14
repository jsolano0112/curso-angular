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
  
  habilitacionCuadro = true;
  usuRegistrado = false;
  textoDeRegistro = "No hay nadie registrado";

  getRegistroUsuario(){
    this.usuRegistrado = false;
  }

  setUsuarioRegistrado(event:Event){
    // this.textoDeRegistro = "El usuario se acaba de registrar";
    if((<HTMLInputElement>event.target).value == "si"){
      this.textoDeRegistro = "El usuario se acaba de registrar"
    }else{
      this.textoDeRegistro = "No hay nadie registrado";
    }
  }
  
  getEdad(){
    return this.edad;
  }

}
