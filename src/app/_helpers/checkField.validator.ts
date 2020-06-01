import { FormGroup } from '@angular/forms';

/**
 * Comprobacion longitud de un campo
 *
 * @export
 * @param {string} texto Variable a comprobar
 * @param {number} maximo Longitud maxima
 * @param {string} campo Nombre del campo
 * @returns mensaje afirmativo
 */
export function checkLengthString(texto: string, maximo: number, campo: string) {
  let message = '';
  if (texto.length > maximo) {
    message = 'Has superado el límite de carácteres máximos en el campo: ' + campo;
  }
  return message;
}
/**
 * Comprobar que solo se permiten letras
 *
 * @export
 * @param {*} valor
 * @returns
 */
export function comprobarLetras(valor) {
console.log('comprobar letras', valor);
const letras: RegExp = /^[A-Za-z\s]+$/;
 // const letras: RegExp = /^[A-Za-z]/;

let message = '';

if (letras.test(valor) == false) {
    message = '-En el campo genero solo se permiten letras.';
  }
return message;
}

export function checkFile(file: File) {
  if (file.type.match(/image\/*/) == null) {
    return true;
  }
}
export function checkIsbnFormat(texto: string) {
  let message = '';
  const reg: RegExp = /^[0-9-]+$/;
  if (reg.test(texto) == false) {
    message = 'Asegurese de estar introduciendo un formato correcto en el ISBN ';
  }
  return message;
}
