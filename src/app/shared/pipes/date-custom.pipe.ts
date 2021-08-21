import { Pipe, PipeTransform } from '@angular/core';
import  * as moment from 'moment';
@Pipe({
  name: 'dateCustom'
})
export class DateCustomPipe implements PipeTransform {

  transform(value: string, format: string, type: string): unknown {
    return `${type}: ${moment(value, 'YYYY-MM-DD').format(format)}`;
  }

}
