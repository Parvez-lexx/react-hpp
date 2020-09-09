import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const customStyles = {
  placeholder: () => ({
      fontSize: 12,
  }),
  indicatorSeparator: () => ({
      display: "none"
  }),
}

function FieldSelectComponent(props) {

  return(
    <div className={props.className}>
        <Select
          styles={customStyles}
          value={props.selectedOption}
          onChange={props.onChange}
          options={props.options}
          placeholder={props.placeholder}
        />
    </div>
  );
} 


export const FieldSelect = styled(FieldSelectComponent)`
select{
    width: 100%;
    height: 40px;
    border: 1px solid #cacdd1;
    border-radius: 3px;
    margin-top: 3px;
    padding-left: 10px;
    outline: none;
    &.error-field-bdr{
      border: 1px solid red !important;
    }
    &:option{
       font-size: 12px;
    }
}
`;