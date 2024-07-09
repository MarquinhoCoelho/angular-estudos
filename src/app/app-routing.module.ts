import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ArtigoCrudComponent } from './views/artigos-crud/artigo-crud.component';
import { ArtigoCreateComponent } from "./components/product/artigo-create/artigo-create.component";
import { ArtigoDeleteComponent } from "./components/product/artigo-delete/artigo-delete.component";
import { ArtigoUpdateComponent } from "./components/product/artigo-update/artigo-update.component";


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "artigos",
    component: ArtigoCrudComponent
  },
  {
    path: "artigos/create",
    component: ArtigoCreateComponent
  },
  {
    path: "artigos/update/:id",
    component: ArtigoUpdateComponent
  },
  {
    path: "artigos/delete/:id",
    component: ArtigoDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
