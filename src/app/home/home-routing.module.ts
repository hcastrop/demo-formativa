import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./posts/posts.module').then((m) => m.PostsModule),
            },
            {
                path: 'users',
                loadChildren: () =>
                    import('./users/users.module').then((m) => m.UsersModule),
            },
            {
                path: 'banners',
                loadChildren: () =>
                    import('./banners/banners.module').then((m) => m.BannersModule),
            },
            {
                path: 'formulario',
                loadChildren: () => import('./form/form.module').then(m => m.FormModule)
            }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
