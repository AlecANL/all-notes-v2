import { Pipe, PipeTransform } from '@angular/core';
import * as marked from 'marked';

@Pipe({
  name: 'toHTML',
})
export class ToHTML implements PipeTransform {
  transform(value: string) {
    return (marked as any).parse(value);
  }
}
