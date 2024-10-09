import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'otp',
  standalone: true
})
export class OtpPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
