import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, characters?: number): string {
  	characters = (characters)?characters:9;
  	console.log('characters : ' + characters);
  	return value.substring(0, characters) + ' ... ';
  }

}
