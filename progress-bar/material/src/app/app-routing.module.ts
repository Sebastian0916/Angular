import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/menu/form/form.component';
import { HomeComponent } from './components/menu/home/home.component';
import { ListComponent } from './components/menu/list/list.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'list', component: ListComponent, data: { title: 'List' } },
  { path: 'form', component: FormComponent, data: { title: 'Form' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
