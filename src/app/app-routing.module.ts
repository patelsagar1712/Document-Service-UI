import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: ()=>import('./modules/login-page/login-page.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: ()=>import('./modules/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'user',
    loadChildren: ()=>import('./modules/user-upload/user-upload.module').then(m => m.UserUploadModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
