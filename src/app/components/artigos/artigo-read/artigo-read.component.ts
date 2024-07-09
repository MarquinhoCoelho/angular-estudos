import { ArtigoService } from '../artigo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artigo-read',
  templateUrl: './artigo-read.component.html',
  styleUrls: ['./artigo-read.component.css']
})
export class ArtigoReadComponent implements OnInit {
  
  displayedColumns = ['id', 'nome', 'descricao', 'conteudo', 'imagem', 'github', 'action']
  
  exibirEmTabela: boolean;
  artigos: any[]
  constructor(private ArtigoService: ArtigoService) { }

  ngOnInit(): void {
    this.ArtigoService.read().subscribe(artigos => {
      this.artigos = artigos;
    })

    const storedValue = localStorage.getItem('exibirEmTabela');
    this.exibirEmTabela = storedValue ? JSON.parse(storedValue) : false;
  }

  mudarExibicao() {
    this.exibirEmTabela = !this.exibirEmTabela;
    localStorage.setItem('exibirEmTabela', JSON.stringify(this.exibirEmTabela));
  }

  tamanhoMaximo(texto: string): string {
    if (texto.length > 30) {
      return texto.substring(0, 30) + '...';
    } else {
      return texto;
    }
  }

}
