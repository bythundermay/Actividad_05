import { Component, Input } from '@angular/core';
import { INoticias } from '../../interfaces/inoticias.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  @Input() noticias: INoticias [] = [];
  
  ngOnInit(): void {
    this.cargarDatos()
  }

  cargarDatos(): string {
    let html = "";

    this.noticias.forEach(noticia => {
      html += ` 
      <article class="articulo" >
       <img src="${noticia.imagen}" alt="">
      <h3>${noticia.titulo}</h3>
      <p>${noticia.cuerpo}</p>
      <h4>${noticia.autor}</h4>
      <h4 class="date">${noticia.fecha}</h4>
      </article>`
    })
    return html;
  }

}
