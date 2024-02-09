import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogComponent } from './componentes/blog/blog.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { INoticias } from './interfaces/inoticias.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogComponent, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  arrNoticias: INoticias [] = [

    {
      titulo: "No tengo un pelo de tonta",
      autor: "Maria",
      imagen: "./assets/images/photo_01.jpg",
      cuerpo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt sapien quis tempor consectetur.",
      fecha: new Date().toLocaleDateString(),
    },
    {
      titulo: "One piece es lo mejor que existe",
      autor: "Alex",
      imagen: "./assets/images/photo_02.jpg",
      cuerpo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt sapien quis tempor consectetur.",
      fecha: new Date().toLocaleDateString(),
    }
  ]

  insertData($event:any):void{
    this.arrNoticias.push($event);
  }

}
