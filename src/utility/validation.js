
const validate = (value, rules, connectedValue) => {
    let isValid = true;
    for(let rule in rules){
        switch (rule) {
            case 'isEmail':
                isValid = isValid && emailValidator(value);
                break;
            
            case 'minLength':
                isValid = isValid && minLengthValidator(value, rules[rule]);
                break;

            case 'equalTo':
                isValid = isValid && equalToValidator(value, connectedValue[rule]);
                break;
        
            default:
                break;
        }
    }
    return isValid;
}

const emailValidator = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const minLengthValidator = (val, minLength) => {
    return val.length >= minLength;
}

const equalToValidator = (val, equalTo) => {
    return val === equalTo;
}

export default validate;
