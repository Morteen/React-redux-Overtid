import React from 'react'
import PropTypes from 'prop-types';
 import classnames from 'classnames';
const TextFieldGroup =({field,value,label,error,type,onChange,checkUserExist}) => {
    
  return (
    <div className={classnames("form-group",{invalid:error})}>
          <label className="control-label">{label}</label>
          <input 
         
          value={value}
          onChange={onChange}
          onBlur={checkUserExist}
          type={type} 
          name= {field}
          className="form-control"
          />
            {error && <span className="form-text text-danger">{error}</span>}
          </div>
  )





}
TextFieldGroup.propTypes={
    
  field: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  type:PropTypes.string,
  onChange:PropTypes.func,
  checkUserExist:PropTypes.func


}
TextFieldGroup.defaultProps={type:'text'}

export default TextFieldGroup