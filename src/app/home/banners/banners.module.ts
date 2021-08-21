import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannersRoutingModule } from './banners-routing.module';
import { BannersComponent } from './banners.component';
import { BannersService } from 'src/app/shared/providers/banners.service';
import { HttpClientModule } from '@angular/common/http';
import { BannerFormComponent } from './banner-form/banner-form.component';
import { BannerImageComponent } from './banner-image/banner-image.component';


@NgModule({
  declarations: [
    BannersComponent,
    BannerFormComponent,
    BannerImageComponent
  ],
  imports: [
    CommonModule,
    BannersRoutingModule,
    HttpClientModule
  ],
  providers: [BannersService]
})
export class BannersModule { }
