import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-artigo-crud',
  templateUrl: './artigo-crud.component.html',
  styleUrls: ['./artigo-crud.component.css']
})
export class ArtigoCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Artigos',
      icon: 'article',
      routeUrl: '/artigos'
    }
  }

  ngOnInit(): void {
  }

  navigateToartigoCreate(): void {
    this.router.navigate(['/artigos/create'])
  }

}
