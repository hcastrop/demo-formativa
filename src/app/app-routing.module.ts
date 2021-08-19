import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarActivedGuard } from './core/guards/validar-actived.guard';
import { ValidarInactivedGuard } from './core/guards/validar-inactived.guard';

const routes: Routes = [
    {
        path: '',
        canActivate: [ValidarInactivedGuard],
        loadChildren: () =>
            import('./home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'login',
        canActivate: [ValidarActivedGuard],
        loadChildren: () =>
            import('./login/login.module').then((m) => m.LoginModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
