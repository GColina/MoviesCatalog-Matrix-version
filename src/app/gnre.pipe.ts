import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gnre',
  standalone: true,
})
export class GnrePipe implements PipeTransform {
  transform(value: string | undefined): string | undefined {
    let genre;
    switch (value?.toLowerCase()) {
      case 'cf':
        genre = 'Ciencia Ficción';
        break;
      case 'drm':
        genre = 'Drama';
        break;
      default:
        return value ? `Género no reconocido: ${value}` : undefined;
    }
    return genre;
  }
}
