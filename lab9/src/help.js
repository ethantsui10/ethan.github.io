import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Modal from "react-bootstrap/Modal";
import Iconh from "./img/iconh.png";
import Image from 'react-bootstrap/Image';


const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <h4><Image src={Iconh} height = {40} width = {40}/>Let us give you a hand!</h4>
        <p>
          <br />
          Please select a service from the drop down menu in the "Services" section to review the differnt prices of services and to see photos of the corresponding services.
          Additionally, please select a service from the "Book Appointment" section to select an appointment for the corresponding service.
          <br />
          <br />
          -The Car Shop
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

 const X = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Nav.Link onClick={() => setModalShow(true)}><Image src={Iconh} height = {35} width = {35}/>Help</Nav.Link>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default X
