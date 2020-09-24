import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent as HomePageComponent } from './pages/home/components/main/main.component';
import { MainComponent as ContactPageComponent } from './pages/contact/components/main/main.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contact', component: ContactPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
