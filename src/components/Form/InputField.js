import React from 'react';
import PropTypes from 'prop-types';


const InputField = (props) => {
    const {name,label,value,error,onChange, ...inputProps} = props;

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                name={name}
                value={value}
                onChange={(e)=> onChange(e.target.name,e.target.value)}
                {...inputProps}
            />
            <p>{error}</p>
        </div>
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