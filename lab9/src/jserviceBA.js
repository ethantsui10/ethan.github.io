import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DatePicker from "react-datepicker";
import getDay from "react-datepicker";
import addDays from "react-datepicker";
import Button from "react-bootstrap/Button";


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validCCRegex = RegExp(/^(?:3[47][0-9]{13})$/);
const validDateRegex = RegExp(/(0\d{1}|1[0-2])\/([0-2]\d{1}|3[0-1])\/(19|20)\d{2}/);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class jRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      creditCard: null,
      classname: '',
      startDate: new Date(),
      mech: '',
      serv: '',
      pass: '',
      errors: {
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
            : 'メールが無効です！';
        break;
      case 'creditCard':
        errors.creditCard =
          validCCRegex.test(value)
            ? ''
            : 'クレジットカードは有効ではありません';
        break;

    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.serv === '' || this.state.mech === '' || this.state.email === null || this.state.creditCard === null){
      this.setState({pass:'すべてのフィールドが入力されていることを確認してください' })
      this.setState({classname:'error'})


    }

    else if(this.state.errors.email !== '' || this.state.errors.creditCard !== ''){
      this.setState({pass:'すべてのフィールドが入力されていることを確認してください' })
      this.setState({classname:'error'})

    }

    else{
      this.setState({pass:"ありがとうございました！ 予約しました！"})
      this.setState({classname:" "})

    }

    console.log(this.state.pass);

  }

  handleServ = (event) => {

    this.setState({ serv: event.target.value })


  }

  handleSelect = (event) => {

    this.setState({ mech: event.target.value })


  }


  isWeekday = (date: Date) =>{
    const day = date.getDay()
    if(this.state.mech == "Ben"){
      return day !==0 && day !== 6
    }
    else if(this.state.mech == "Jorge"){
      return day!== 0 && day !==3 && day !==5
    }
    else if (this.state.mech == "Jen"){
      return day !== 1 && day !==2 && day !==4
    }
  }




  render() {
    const {errors} = this.state;
    return (

      <div className='wrapper'>
        <div className='form-wrapper'>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className = 'serviceSection'>
              <fieldset>
                <Form.Group as={Row}>
                  <Form.Label as="legend" column sm={3}>
                    サービスを選択
                  </Form.Label>
                  <Col sm={5}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control as="select" value ={this.state.serv} onChange = {this.handleServ} defaultValue="">
                      <option value ="" disabled ={true}>選択する</option>
                      <option value ="oilChange">$100 - オイル交換</option>
                      <option value ="flatTire">$750 - パンクしたタイヤ</option>
                      <option value ="paintTouchUp">$1000 - ペイントタッチアップ</option>
                      <option value ="engineRepair">$2000 - エンジン修理</option>
                    </Form.Control>
                  </Form.Group>
                  </Col>
                </Form.Group>
              </fieldset>



            </div>




            <div className = 'mechSection'>
              <fieldset>
                <Form.Group as={Row}>
                  <Form.Label as="legend" column sm={3}>
                    整備士を選択してください
                  </Form.Label>
                  <Col sm={5}>
                    <Form.Group controlId="MechanicRepairList">
                      <Form.Control as="select" onChange = {this.handleSelect} value={this.state.mech} defaultValue="">
                        <option value ="" disabled = {true}> 選択する</option>
                        <option value ="Ben">Ben</option>
                        <option value = "Jorge">Jorge</option>
                        <option value = "Jen">Jen</option>
                      </Form.Control>

                    </Form.Group>
                  </Col>
                </Form.Group>
              </fieldset>
            </div>
            <div className = 'dateSection'>
              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={3}>
                  日付を選択してください
                </Form.Label>

                <Col sm={5}>
                <div className= 'date'>
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={(date)=>this.setState({startDate:date})}
                    filterDate ={this.isWeekday}
                    minDate = {new Date()}
                    maxDate = {new Date ("09-01-2020")}
                  />
                </div>
                </Col>
              </Form.Group>
            </div>
            <div className = 'emailSection'>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={3}>
                メールアドレスを入力してください：
              </Form.Label>

              <Col sm={5}>
              <OverlayTrigger key = "right" placement = "right" overlay = {
                  <Tooltip id = {'emailtt-right'}>
                    連絡が必要な場合に備えて、メールをお願いします。
                  </Tooltip>
                }>
              <div className='email'>
                <Form.Control type="email" name = 'email' placeholder="Eメール" onChange={this.handleChange} noValidate/>
                {errors.email.length > 0 &&
                  <span className='error'>{errors.email}</span>}
              </div>
              </OverlayTrigger>
              </Col>
            </Form.Group>
            </div>
            <div className = 'creditCardSection'>
              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={3}>
                  クレジットカードの番号を入力して下さい：
                </Form.Label>
                <Col sm={5}>
              <OverlayTrigger key = "right" placement = "right" overlay = {
                  <Tooltip id = {'emailtt-right'}>
                    ノーショーの場合はクレジットカードをお願いします。
                  </Tooltip>
                }>
                <div className='creditCard'>

                  <Form.Control type="creditCard" name = 'creditCard' placeholder="375912345612345" onChange={this.handleChange} noValidate/>
                  {errors.creditCard.length > 0 &&
                    <span className='error'>{errors.creditCard}</span>}
                </div>
              </OverlayTrigger>
              </Col>
              </Form.Group>
            </div>
            <div className='submit' onClick = {this.handleSubmit}>
              <Button variant ='primary'>参加する</Button><br />
              <span className={this.state.classname}>{this.state.pass}</span>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default jRegister;
