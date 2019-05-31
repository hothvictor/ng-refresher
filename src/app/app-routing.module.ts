import { NgModule } from "@angular/core";
import { PersonsComponent } from "./persons/persons.component";
import { PersonInputComponent } from "./persons/person-input.component";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PersonsComponent },
  { path: 'input', component: PersonInputComponent }

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRountingModule { }
