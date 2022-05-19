import React, {useState} from 'react';
import currency from '../db/currency.json'
import '../styles/Form.css';

const initState = {
    currencyType: '',
    amount: '',
    dayofbuy: '',
    price: '',
}

const Form = () => {
    const [inputValue, setInputValue] = useState(initState)
    console.log(inputValue);

    const handleFieldChange = (e) =>{
        setInputValue({...inputValue, [e.target.name]: e.target.value})
    }

    const renderCurrencyOptionsList = () =>{
        return currency.map((item) => {
            return (
                <option key={item.code} value={item.code}>{item.code}</option>
            )
        })
    }

    return (
        <>
            <h2>Dodaj zakupioną walutę:</h2>
            <form>
                <div>
                    <label htmlFor="currencyType">Wybierz walutę: </label>
                    <select id="currencyType" name='currencyType' onChange={handleFieldChange}>
                        {renderCurrencyOptionsList()}
                    </select>
                </div>
                <div>
                    <label htmlFor='amount'>Ilość: </label>
                    <input name='amount' id='amount' value={inputValue.amount} onChange={handleFieldChange}/>
                </div>
                <div>
                    <label htmlFor='dayofbuy'>Data zakupu: </label>
                    <input name='dayofbuy' id='dayofbuy' value={inputValue.dayofbuy} onChange={handleFieldChange}/>
                </div>
                <div>
                    <label htmlFor='price'>Cena zakupu: </label>
                    <input name='price' id='price' value={inputValue.price} onChange={handleFieldChange}/>
                </div>
        </form>
        </>
    )

}

export default Form;