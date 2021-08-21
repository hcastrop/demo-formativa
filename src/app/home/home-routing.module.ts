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
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
