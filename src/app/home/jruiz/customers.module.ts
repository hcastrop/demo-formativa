import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomersFormComponent } from './customers-form/customers-form.component';
import { CustomersService } from 'src/app/shared/providers/customers.service';
import { AuthInterceptor } from 'src/app/core/interceptor/auth.interceptor';

@NgModule({
  declarations: [CustomersComponent, CustomersFormComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    CustomersService,
  ],
})
export class CustomersModule {}
