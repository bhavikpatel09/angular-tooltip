import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TooltipComponent } from './tooltip/tooltip.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'tooltip',component:TooltipComponent},
  {path:'home',component:HomeComponent},
  {path:'',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
