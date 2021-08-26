import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannersRoutingModule } from './banners-routing.module';
import { BannersComponent } from './banners.component';
import { BannersService } from 'src/app/shared/providers/banners.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BannerFormComponent } from './banner-form/banner-form.component';
import { BannerImageComponent } from './banner-image/banner-image.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from 'src/app/core/interceptor/auth.interceptor';
import { StorageService } from 'src/app/shared/providers/storage.service';

@NgModule({
    declarations: [BannersComponent, BannerFormComponent, BannerImageComponent],
    imports: [
        CommonModule,
        BannersRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        BannersService,
        StorageService
    ],
})
export class BannersModule {}
