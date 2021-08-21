import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateCustomPipe } from './date-custom.pipe';

@NgModule({
    declarations: [DateCustomPipe],
    exports: [DateCustomPipe],
    imports: [CommonModule],
})
export class PipesModule {}
