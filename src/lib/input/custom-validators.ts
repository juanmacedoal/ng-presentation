export class CustomValidator {
  /**
   * Validates passwords
   *
   * @static
   * @param {*} group
   * @returns {*}
   * @memberof CustomValidator
   */
  static matchPassword(group): any {
    const password = group.controls.password;
    const confirm = group.controls.confirm;
    if (password.pristine || confirm.pristine) {
      return null;
    }
    group.markAsTouched();
    if (password.value === confirm.value) {
      return null;
    }
    return {
      invalidPassword: true
    };
  }

  /**
   * Validates numbers
   *
   * @static
   * @param {*} number
   * @returns {*}
   * @memberof CustomValidator
   */
  static numberValidator(number): any {
    if (number.pristine) {
      return null;
    }
    const NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/;
    number.markAsTouched();
    if (NUMBER_REGEXP.test(number.value)) {
      return null;
    }
    return {
      invalidNumber: true
    };
  }

  /**
   * Validates phone numbers
   *
   * @static
   * @param {*} number
   * @returns {*}
   * @memberof CustomValidator
   */
  static phoneValidator(number): any {
    if (number.pristine) {
      return null;
    }
    const PHONE_REGEXP = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
    number.markAsTouched();
    if (PHONE_REGEXP.test(number.value)) {
      return null;
    }
    return {
      invalidNumber: true
    };
  }

  /**
   * Validates zip codes
   *
   * @static
   * @param {*} zip
   * @returns {*}
   * @memberof CustomValidator
   */
  static zipCodeValidator(zip): any {
    if (zip.pristine) {
      return null;
    }
    const ZIP_REGEXP = /^[0-9]{5}(?:-[0-9]{4})?$/;
    zip.markAsTouched();
    if (ZIP_REGEXP.test(zip.value)) {
      return null;
    }
    return {
      invalidZip: true
    };
  }

  /**
   * Validates alphanumeric
   *
   * @static
   * @param {*} zip
   * @returns {*}
   * @memberof CustomValidator
   */
  static alphanumericValidator(alphanumeric): any {
    if (alphanumeric.pristine) {
      return null;
    }
    const ALPHANUMERIC_REGEXP = /^[a-z0-9_-]{8,15}$/;
    alphanumeric.markAsTouched();
    if (ALPHANUMERIC_REGEXP.test(alphanumeric.value)) {
      return null;
    }
    return {
      alphanumeric: true
    };
  }
}
