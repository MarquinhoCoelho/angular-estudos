import { ArtigoService } from '../artigo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artigo-create',
  templateUrl: './artigo-create.component.html',
  styleUrls: ['./artigo-create.component.css']
})
export class ArtigoCreateComponent implements OnInit {

  artigo: any = {
    nome: '',
    descricao: '',
    conteudo: '',
    imagem: '',
    github: '',
  }

  constructor(private ArtigoService: ArtigoService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  criarArtigo(): void {
    this.ArtigoService.create(this.artigo).subscribe(() => {
      this.ArtigoService.showMessage('Artigo criado!')
      this.router.navigate(['/artigos'])
    }, error => {
      console.log(error);
      this.router.navigate(["/artigos"]);
    });

  }

  cancel(): void {
    this.router.navigate(['/artigos'])
  }
}
