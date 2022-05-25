/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {useDispatch } from 'react-redux';
import { addItemToWallet } from '../../modules/wallet/wallet.actions';
import { loadExchangeRate } from '../../modules/exchangeAPI/exchangeAPI.actions';
import InputField from './InputField';
import formValidation from '../../functions/formValidation'
import currency from '../../db/currency.json';
import inputs from '../../db/inputs.json';
import '../../styles/Form.css';

const initState = {
    currencytype: '',
    amount: '',
    dayofbuy: '',
    price: '',
}

const Form = () => {
    const [fieldsData, setInputValue] = useState(initState);
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const renderCurrencyOptionsList = () =>{
        return currency.map((item) => {
            return (
                <option key={item.code} value={item.code}>{item.code}</option>
            )
        });
    }

    const renderInputsFields = () => {
        return inputs.map((input) => {
            return (
            <InputField
                key={input.id}
                name={input.name}
                value={fieldsData[input.name]}
                onChange={handleFieldChange}
                {...input}
                error={errors[input.name]}
            />
            )
        });
    }

    const handleFieldChange = (name,value) =>{
        setInputValue({...fieldsData, [name]: value})
    }

    const handleSubmit = e =>{
        e.preventDefault();
        const err = formValidation(fieldsData);

        if(Object.keys(err).length === 0){
            dispatch(addItemToWallet(fieldsData))
            dispatch(loadExchangeRate(fieldsData.currencytype))
            //checkExchangeRate();
            clearInputsFields()
        }
        setErrors(err);
    }
    console.log(fieldsData.currencytype);

    // const checkExchangeRate = () =>

    const clearInputsFields = ()=>{
        setInputValue(initState);
    }


    return (
        <section>
            <h2>Dodaj zakupioną walutę</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label htmlFor="currencytype">Wybierz walutę: </label>
                    <select name='currencytype' id="currencytype" onChange={(e)=>handleFieldChange(e.target.name,e.target.value)}>
                        {renderCurrencyOptionsList()}
                    </select>
                </div>
                    {renderInputsFields()}
                <div>
                    <button>DODAJ</button>
                </div>
            </form>
        </section>
    )

}

export default Form;