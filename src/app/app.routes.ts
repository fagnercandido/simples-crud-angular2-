import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ListagemComponent } from "./listagem/listagem.component";
import { NotfoundComponent } from "./notfound/notfound.component";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'listagem', component: ListagemComponent},
    {path: 'sobre', loadChildren: './sobre/sobre.module#SobreModule'},
    {path: '**', component: NotfoundComponent}
]