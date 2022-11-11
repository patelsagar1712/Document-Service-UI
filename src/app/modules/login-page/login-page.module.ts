import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from 'src/app/components/login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from 'src/app/components/login-form/login-form.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  }
];

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class LoginPageModule { }
