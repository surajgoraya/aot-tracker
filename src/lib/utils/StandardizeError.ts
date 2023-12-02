/**
 * The types of errors which can occur in the AOT app.
 */
enum ERROR_CODES {
  NO_API_ACCESS = 1,
  MAL_IS_DOWN = 2,
  UNKNOWN = 100,
}

/**
 * Standardizes the creation of errors within the AOT web app.
 *
 * @param title The Title of the error
 * @param description The description of the error.
 * @param code Standardized Error Code for the error
 * @returns {object} Error Object
 */
function CreateError(code: ERROR_CODES, title?: String, description?: String) {
  switch (code) {
    case ERROR_CODES.NO_API_ACCESS:
      return {
        error: true,
        error_title: "api access is denied.",
        error_description:
          "An invalid API access key was provided. Check authorization.",
        error_code: "NO_API_ACCESS",
      };
    case ERROR_CODES.MAL_IS_DOWN:
      return {
        error: true,
        error_title: "an error occurred.",
        error_description: null,
        error_code: "MAL_IS_DOWN",
      };
    case ERROR_CODES.UNKNOWN:
      return {
        error: true,
        error_title: title,
        error_description: description,
        error_code: code,
      };
    default:
      break;
  }
}

export { CreateError, ERROR_CODES };
