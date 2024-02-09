import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INoticias } from '../../interfaces/inoticias.interface';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {
  newNoticia: INoticias ={
      titulo: "",
      autor: "",
      imagen: "",
      cuerpo: "",
      fecha: new Date().toLocaleDateString()
  }
  
  @Output() noticiaEmitida :EventEmitter<INoticias> = new EventEmitter()

  guardar():void {
    if(this.newNoticia.titulo != "" && this.newNoticia.autor !== ""){
      this.noticiaEmitida.emit(this.newNoticia)
      this.newNoticia ={
       titulo: "",
         autor: "",
         imagen: "",
         cuerpo: "",
         fecha: "",
     }
    }else{
      alert('Los campos no pueden ser vacios')
    }

   
  }
}
