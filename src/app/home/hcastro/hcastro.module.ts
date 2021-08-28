import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HcastroRoutingModule } from './hcastro-routing.module';
import { HcastroComponent } from './hcastro.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from 'src/app/shared/providers/cliente.service';
import { AuthInterceptor } from 'src/app/core/interceptor/auth.interceptor';
import { HcastroFormComponent } from './hcastro-form/hcastro-form.component';

@NgModule({
    declarations: [HcastroComponent, HcastroFormComponent],
    imports: [
        CommonModule,
        HcastroRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        ClienteService,
    ],
})
export class HcastroModule {}
