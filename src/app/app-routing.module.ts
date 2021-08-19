import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarGuard } from './core/guards/validar.guard';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: 'post/:index',
    canActivate: [ValidarGuard],
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
