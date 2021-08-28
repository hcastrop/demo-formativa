import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HcastroComponent } from './hcastro.component';

const routes: Routes = [
    {
        path: '',
        component: HcastroComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HcastroRoutingModule {}
