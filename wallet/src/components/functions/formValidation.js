const formValidation = (fieldValues) => {
    const errors = {};
    const regExpAmountPrice = /^([0-9]{0,2}((.)[0-9]{0,2}))$/;
    const regExpDay = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

    if(!fieldValues.amount.match(regExpAmountPrice)){
        errors.amount = "Ilość jest wymagana, tylko liczby oraz przecinek lub kropka"
    }

    if(!fieldValues.price.match(regExpAmountPrice)){
        errors.price = "Cena jest wymagana, tylko liczby oraz przecinek lub kropka"
    }

    if(!fieldValues.dayofbuy.match(regExpDay)){
        errors.dayofbuy = "Dzień zakupu jest wymagany format RRRR-MM-DD"
    }

    return errors;
}

export default formValidation;