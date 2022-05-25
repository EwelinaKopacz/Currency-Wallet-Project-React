/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState,useEffect} from 'react';
//import {useDispatch } from 'react-redux';
//import { addItemToWallet } from '../../modules/localStorage/localStorage.actions';
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
    const [fieldsData, setFieldsData] = useState(initState);
    const [error, setError] = useState({});
    //const dispatch = useDispatch();


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
                error={error[input.name]}
            />
            )
        });
    }

    const handleFieldChange = (name,value) =>{
        setFieldsData({...fieldsData, [name]: value})
    }

    const clearInputsFields = () =>{
        setFieldsData(initState);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        const error = formValidation(fieldsData);
        if(error.length === 0){
            // dispatch(addItemToWallet(fieldsData))
            clearInputsFields();
        }
        setError(error)
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
                    <button >DODAJ</button>
                </div>
                {/* {dataSent ? <p>Zakup został dodany</p> : null } */}
            </form>
        </section>
    )

}

export default Form;