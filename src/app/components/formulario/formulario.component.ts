import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
})

export class FormularioComponent implements OnInit {

    forma: FormGroup;

  constructor( private fb: FormBuilder) { 

    this.crearFormulario();
  }

  
    
  ngOnInit(): void {
  }

    crearFormulario(){

        this.forma = this.fb.group({
            nombre: [''],
            apellido: [''],
            correo: [''],
        });
    }

    guardar(){
        console.log(this.forma);

    }




}
