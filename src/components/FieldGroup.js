import React ,{Component} from 'react';
import Radium, { Style } from 'radium';
import  globalConst from '../globalConst';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

function FieldGroup({ id, label, help,inputRef, ...props }) {
  return (
    <FormGroup controlId={id}>
      {/* <ControlLabel>{label}</ControlLabel> */}
      <FormControl {...props}  inputRef={inputRef}/>
      {/* {help && <HelpBlock>{help}</HelpBlock>} */}
    </FormGroup>
  );
}

FieldGroup = Radium(FieldGroup);
export default FieldGroup;