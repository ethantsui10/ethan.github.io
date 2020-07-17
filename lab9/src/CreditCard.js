import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Alert from 'react-bootstrap/Alert';


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validCCRegex = RegExp(/^(?:3[47][0-9]{13})$/);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class CreditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      creditCard: null,
      errors: {
        fullName: '',
        email: '',
        creditCard: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName':
        errors.fullName =
          value.length < 5
            ? 'Full Name must be 5 characters long!'
            : '';
        break;
      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'creditCard':
        errors.creditCard =
          validCCRegex.test(value)
            ? ''
            : 'CC is not valid';
        break;

    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <form onSubmit={this.handleSubmit} noValidate>
          <OverlayTrigger key = "right" placement = "right" overlay = {
              <Tooltip id = {'emailtt-right'}>
                We ask for your credit card in case of a no show.
              </Tooltip>
            }>
            <div className='creditCard'>

              <Form.Control type="creditCard" name = 'creditCard' placeholder="375912345612345" onChange={this.handleChange} noValidate/>
              {errors.creditCard.length > 0 &&
                <span className='error'>{errors.creditCard}</span>}
            </div>
            </OverlayTrigger>
          </form>
        </div>
      </div>
    );
  }
}

export default CreditCard;
