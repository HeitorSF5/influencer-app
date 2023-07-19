import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { ListComponent } from "./components/list/list.component";
import { RegisterComponent } from "./components/register/register.component";
import { EditComponent } from "./components/edit/edit.component";

const routes : Routes = [
  { path: '', component: LoginComponent},
  { path: 'list', component: ListComponent },
  { path: 'list/:id', component: EditComponent},
  { path: 'register', component: RegisterComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
