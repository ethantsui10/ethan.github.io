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
        <h4><Image src={Iconh} height = {40} width = {40}/>手を差し上げましょう！</h4>
        <p>
          <br />
            「サービス」セクションのドロップダウンメニューからサービスを選択して、サービスの異なる価格を確認し、対応するサービスの写真を確認してください。
             さらに、「予約」セクションからサービスを選択して、対応するサービスの予約を選択してください。
          <br />
          <br />
          -The Car Shop
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>閉じる</Button>
      </Modal.Footer>
    </Modal>
  );
}

 const X = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Nav.Link onClick={() => setModalShow(true)}><Image src={Iconh} height = {35} width = {35}/>助けて</Nav.Link>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default X
