import { Router, ActivatedRoute } from "@angular/router";
import { ArtigoService } from "../artigo.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-artigo-update",
  templateUrl: "./artigo-update.component.html",
  styleUrls: ["./artigo-update.component.css"],
})
export class ArtigoUpdateComponent implements OnInit {
  artigo: any = {
    nome: '',
    descricao: '',
    conteudo: '',
    imagem: '',
    github: ''
  };

  constructor(
    private ArtigoService: ArtigoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.ArtigoService.readById(id).subscribe((artigo) => {
      this.artigo = artigo;
    });
  }

  atualizarArtigo(): void {
    this.ArtigoService.update(this.artigo).subscribe(() => {
      this.ArtigoService.showMessage("Artigo atualizado com sucesso!");
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
