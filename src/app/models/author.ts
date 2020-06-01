export interface Author {
  /**
   * Id autonumerico
   */
  id: number;
  /**
   * Nombre del autor
   *
   * @type Validacion Solo letras
   * @memberof Author
   */
  first_name: string;
  /**
   * Apellido del autor
   *
   * @type Validacion Solo letras
   * @memberof Author
   */
  last_name: string;
  /**
   * Nacionalidad del autor
   *
   * Validacion Solo letras
   */
  nacionalidad: string;
  /**
   * Fecha nacimiento del autor
   *
   * @memberof Author
   */
  fechaNacimiento: any;
}
