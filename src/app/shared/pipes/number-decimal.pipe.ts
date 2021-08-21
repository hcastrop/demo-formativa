import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberDecimal'
})
export class NumberDecimalPipe implements PipeTransform {

  transform(value: string, decimals = 2): unknown {
    return Number(value).toFixed(decimals);
  }

}
