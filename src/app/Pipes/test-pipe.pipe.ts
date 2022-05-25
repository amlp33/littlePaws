import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe',
})
export class TestPipePipe implements PipeTransform {
  transform(value: string, num: number): string {
    let test = value + ' am test pipe ' + num;
    return test;
  }
}
