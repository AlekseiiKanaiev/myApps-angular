import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDirectiveComponent } from './components/table-directive/table-directive.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomDirectivesComponent } from './components/custom-directives.component';
import { TableDirective } from './_directives/table.directive';
import { FormsModule } from '@angular/forms';
import { SetTableFormComponent } from './components/table-directive/set-table-form/set-table-form.component';

const myDirectivesRoutes: Routes = [
  {path: 'custom-directives', component: CustomDirectivesComponent}
];

@NgModule({
  declarations: [TableDirectiveComponent, CustomDirectivesComponent, TableDirective, SetTableFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(myDirectivesRoutes)
  ]
})
export class CustomDirectivesModule { }
