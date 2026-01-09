import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinText',
})
export class JoinTextPipe implements PipeTransform {

  transform(
    value: string[] | null | undefined,
    separator: string = ' | '
  ): string {
    if (!Array.isArray(value)) {
      return '';
    }

    return value.join(separator);
  }
}
