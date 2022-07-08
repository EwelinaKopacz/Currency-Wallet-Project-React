import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Form.css';


const InputField = (props) => {
    const {name,label,value,error,onChange, ...inputProps} = props;

    return (
        <p className='input__box'>
            <label htmlFor={name} className='input__label'>{label}</label>
            <input
                className='input__value'
                name={name}
                value={value}
                onChange={(e)=> onChange(e.target.name,e.target.value)}
                {...inputProps}
            />
            <span className='input__error'>{error}</span>
        </p>
    )
}

export default InputField;

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange:PropTypes.func.isRequired,
}

InputField.defaultProps = {
    error: ''
};