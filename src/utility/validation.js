const validate = (field, val, rules) => {
  let validator = {
    valid: true,
    message: ''
  };

  for (let rule in rules) {
    switch (rule) {
      case "required":
        validator.valid = required(val);
        validator.message = `${formatFieldName(field)} is required!`;
        break;
      case "isEmail":
        if (validator.valid) {
          validator.valid = emailValidator(val);
          validator.message = 'Email is invalid!';
        }
        break;
      case "isInteger":
        if (validator.valid) {
          validator.valid = isInteger(val);
          validator.message = `Must be integer!`;
        }
        break;
      case "isNumber":
        if (validator.valid) {
          validator.valid = isNumber(val);
          validator.message = `Must be number!`;
          break;
        }
      case "minLength":
        if (validator.valid) {
          validator.valid = minLengthValidator(val, rules[rule]);
          validator.message = `Minimum ${rules[rule]} characters!`;
        }
        break;
      case "maxLength":
        if (validator.valid) {
          validator.valid = minLengthValidator(val, rules[rule]);
          validator.message = `Maximum ${rules[rule]} characters!`;
        }
        break;
      default:
      validator.valid = true;
    }
  }

  return validator;
};

const formatFieldName = (field) => {
  let removedSnakeCase = field.replace("_", " ");
  return removedSnakeCase.replace(/\b\w/g, l => l.toUpperCase());
}

const emailValidator = val => {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
    val
  );
};

const minLengthValidator = (val, minLength) => {
    return val.length >= minLength;
};

const maxLengthValidator = (val, maxLength) => {
  return val.length <= maxLength;
};

const isInteger = val => {
  return false;
}

const isNumber = val => {
  return isNaN(val);
}

const required = val => {
  return val.length > 0;
}

export default validate;