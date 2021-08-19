import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './components/body/body.component';
import { CardPostComponent } from './components/card-post/card-post.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FakeNgIfDirective } from './directives/fake-ng-if.directive';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        BodyComponent,
        CardPostComponent,
        FooterComponent,
        HeaderComponent,
        FakeNgIfDirective,
    ],
    exports: [
      BodyComponent,
      CardPostComponent,
      FooterComponent,
      HeaderComponent,
      FakeNgIfDirective
    ],
    imports: [CommonModule, RouterModule],
})
export class SharedModule {}
