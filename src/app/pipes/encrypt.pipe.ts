import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encrypt'
})
export class EncryptPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
