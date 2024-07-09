import { Router, ActivatedRoute } from "@angular/router";
import { ArtigoService } from "../artigo.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-artigo-delete",
  templateUrl: "./artigo-delete.component.html",
  styleUrls: ["./artigo-delete.component.css"],
})
export class ArtigoDeleteComponent implements OnInit {
  artigo: any = {
    nome: '',
    descricao: '',
    conteudo: '',
    imagem: '',
    github: '',
  }

  constructor(
    private ArtigoService: ArtigoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ArtigoService.readById(id).subscribe((artigo) => {
      this.artigo = artigo;
    });
  }

  deletarArtigo(): void {
    this.ArtigoService.delete(this.artigo.id).subscribe(() => {
      this.ArtigoService.showMessage("Artigo excluido com sucesso!");
      this.router.navigate(["/artigos"]);
    }, error => {
      console.log(error);
      this.router.navigate(["/artigos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/artigos"]);
  }
}
