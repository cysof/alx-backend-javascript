export default class Currency {
  /**
   * Creates a new instance of the class with the specified code and name.
   *
   * @param {string} code - The code for the instance.
   * @param {string} name - The name for the instance.
   */
    constructor(code, name) {
      this._code = code;
      this._name = name;
    }
  
    // setter and getter for code
    set code(code) {
      this._code = code;
    }
  
    get code() {
      return this._code;
    }
  
    // setter and getter for name
    set name(name) {
      this._name = name;
    }
  
    get name() {
      return this._name;
    }
  
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }