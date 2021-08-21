import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateCustomPipe } from './date-custom.pipe';
import { NumberDecimalPipe } from './number-decimal.pipe';

@NgModule({
    declarations: [DateCustomPipe, NumberDecimalPipe],
    exports: [DateCustomPipe, NumberDecimalPipe],
    imports: [CommonModule],
})
export class PipesModule {}
