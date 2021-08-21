import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from 'src/app/shared/providers/users.service';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    PipesModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
