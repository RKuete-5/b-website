import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split',
  
})
export class SplitPipe implements PipeTransform {

  // transform(val:string, params:string[]):string[] {
  //   return val.split(params[0]);
  // }
  transform(value:string, [separator]):string {
    let splits = value.split(separator);
    if(splits.length > 1) {
      return splits.pop();
    } else {
      return '';
    }
  }

}
