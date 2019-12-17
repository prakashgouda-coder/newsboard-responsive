import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NomediaqueryComponent } from "./nomediaquery/nomediaquery.component";

const routes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "nomediaquery", component: NomediaqueryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
