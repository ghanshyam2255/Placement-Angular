import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './Test/parent/parent.component';
import { Parent2Component } from './Test/parent2/parent2.component';

const routes: Routes = [
  //{
  //  path: 'loadParent',
  //  loadChildren: () => import('./Test/parent/parent.component').then(m => m.ParentComponent)  //Lazy loading
  //},
  {
    path: 'loadParent', component: ParentComponent
  },
  {
    path: 'loadParent2', component: Parent2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
