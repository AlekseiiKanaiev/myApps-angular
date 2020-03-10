import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDirectiveComponent } from './components/table-directive/table-directive.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomDirectivesComponent } from './components/custom-directives.component';
import { TableDirective } from './_directives/table.directive';

const myDirectivesRoutes: Routes = [
  {path: 'custom-directives', component: CustomDirectivesComponent}
];

@NgModule({
  declarations: [TableDirectiveComponent, CustomDirectivesComponent, TableDirective],
  imports: [
    CommonModule,
    RouterModule.forRoot(myDirectivesRoutes)
  ]
})
export class CustomDirectivesModule { }
