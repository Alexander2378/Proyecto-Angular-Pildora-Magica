import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  public nombre: string;
  public apellido: string;
  public edad: number;
  private empresa: string;

  constructor() {
    this.nombre = " Alexander",
    this.apellido = "Figueredo",
    this.edad = 30,
    this.empresa = "Sapia"

   }


   getEmpresa(){
    
    return this.empresa; 
   }

  ngOnInit(): void {
  }

}
