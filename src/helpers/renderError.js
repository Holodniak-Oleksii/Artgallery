export const renderError = (hasError, rules) => {
  switch (hasError?.type) {
    case 'required':
      return 'This field is required!';
    case 'less-date':
      return hasError?.message;
    case 'maxLength':
      return `Length exceeded, max ${rules[hasError?.type]} symbol`;
    case 'minLength':
      return `Min length ${rules[hasError?.type]} symbols`;
    case 'max':
      return `Value exceeded, max ${rules[hasError?.type]}`;
    case 'min':
      return `Min value ${rules[hasError?.type]}`;
    case 'validate':
      return hasError?.message;
    case 'pattern':
      return hasError?.message;
    case 'custom':
      return hasError?.message;
    default:
      return 'The field is filled incorrectly';
  }
};
