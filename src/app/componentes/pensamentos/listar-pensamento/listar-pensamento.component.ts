import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
   {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componmente pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada com @input()',
      autoria: 'Componente Filho',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium viverra euismod. Fusce luctus magna magna, eget dapibus enim posuere nec. Nulla placerat lacus ac velit tempor vulputate. Sed dapibus condimentum risus, ut faucibus nunc cursus at. Donec volutpat ante in ullamcorper aliquet. Sed non nunc et diam aliquet hendrerit vitae non justo. Pellentesque fermentum tincidunt pretium.',
      autoria: 'Componente Filho',
      modelo: 'modelo1'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
