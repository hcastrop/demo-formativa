import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateCustomPipe } from './date-custom.pipe';
import { NumberDecimalPipe } from './number-decimal.pipe';
import { FullNamePipe } from './full-name.pipe';

@NgModule({
    declarations: [DateCustomPipe, NumberDecimalPipe, FullNamePipe],
    exports: [DateCustomPipe, NumberDecimalPipe, FullNamePipe],
    imports: [CommonModule],
})
export class PipesModule {}
