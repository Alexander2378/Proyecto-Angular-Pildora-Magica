import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  public title: string;  

  constructor( ) {

    this.title = "Lista de Empleados";
   }

  ngOnInit(): void {
  }

}