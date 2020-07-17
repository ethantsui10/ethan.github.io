import React, {Component, useState} from 'react';
import {Route, IndexRoute} from 'react-router';
// import Todos from './Todos'
// import Button from '@material-ui/core/Button';
// import Image from '@material-ui/core/Image';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropDown';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CardDeck from 'react-bootstrap/CardDeck';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Alert from 'react-bootstrap/Alert';
import Shop from "./img/shopimg.jpg";
import OilChange from "./img/oilchange.jpg";
import TireChange from "./img/tirechange.jpeg";
import CarPaint from "./img/carPaint.jpg";
import EngineRepair from "./img/engineRepair.jpg";
import WindowTint from "./img/windowTint.jpg";
import Exhaust from "./img/exhaust.jpg";
import CarWrap from "./img/carWrap.png";
import EngineTune from "./img/engineTune.jpg";
import Ben from "./img/Ben.jpg";
import Jen from "./img/Jen.jpg";
import Jorge from "./img/Jorge.jpg";
import s2000 from "./img/s2k.jpg";
import m3 from "./img/m3.jpg";
import Viper from "./img/Viper.png";
import GTR from "./img/GT-R.jpg";
import Modal from "react-bootstrap/Modal";
import Help from "./help";
import Register from "./serviceBA";
import RegisterMod from "./modBA";
import RegisterCustom from "./customBA";
import ModalJap from './japModal';
import RegisterJap from "./jserviceBA";
import RegisterModJap from "./japModBA";
import RegisterCustomJap from "./japcustomBA";
import IconB from "./img/iconb.png";
import Iconm from "./img/iconm.png";
import Iconh from "./img/iconh.png";
import Icons from "./img/icons.png";


class App extends Component{

  render() {
      return (

        <>
        <Container fluid = "md">
          <Row>
            <Col>
        <Tab.Container id="left-tabs-example" defaultActiveKey="english">
        <Container>
          <Row className = "justify-content-end">
            <Nav.Item>
              <Nav.Link eventKey="english">English</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="japanese">日本人</Nav.Link>
            </Nav.Item>

          </Row>
        </Container>
        <Row>
        <Tab.Content>
        <Tab.Pane eventKey="english">

        <Container fluid = "md">
          <Row>
            <Col>


          <div>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand href="#home"><h4>The Car Shop</h4></Navbar.Brand>
              <Nav className="mr-auto">
              <Nav.Link href="#sevices"><Image src={Icons} height = {35} width = {35}/> Services</Nav.Link>
              <Nav.Link href="#bookApp"><Image src={IconB} height = {35} width = {35}/>Book Appointment</Nav.Link>
              <Nav.Link href = "#mechanics"><Image src={Iconm} height = {35} width = {35}/>Mechanics</Nav.Link>
              <Help />


              </Nav>

            </Navbar>
            <br />
          </div>

          <div>
              <h3>Welcome to the Shop!</h3>
            <p>The Car Shop is tailored to your car's needs and provides custom vehicles for purchase! Please feel free to check out our store at, 123 Main Street, Vancouver, B.C., Canada! Also check out our services that we have to offer as well as some of our staff that run the shop!</p>
            <Row className="justify-content-md-center">
                <Col xs={5} sm={2} md={9}>
                <Image src={Shop} className="center" height={350} width={700} rounded/>
                </Col>
            </Row>



          <br />
        <br />

          </div>




          <div id = "Services">

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}><h3> <Image src={Icons} height = {50} width = {50}/>Services </h3>

                </Col>
                <Col sm={0.5}>
                  <Nav variant="pills" className="flex-column">
                    <NavDropdown title= "Select" id="nav-dropdown">
                      <NavDropdown.Item eventKey="first" >Repair</NavDropdown.Item>
                    <NavDropdown.Item eventKey="second">Modifications</NavDropdown.Item>
                  <NavDropdown.Item eventKey="third">Custom Vehicles</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>

                </Col>
                <br />
              <br />
            <br />
              </Row>

              <Row>
                <Col sm={11}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div>
                        <h5>Repair Services</h5>
                        <Table>
                          <thead>
                            <tr>
                              <th>Price</th>
                            <th>Service</th>
                          <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>$100</td>
                            <td>Oil Change</td>
                          <td>Easy and cheap oil change</td>
                            </tr>
                            <tr>
                              <td>$750</td>
                            <td>Flat Tire Repair</td>
                          <td>We will replace any flat or leaking tires</td>
                            </tr>
                            <tr>
                              <td>$1000</td>
                            <td>Paint Touch Up</td>
                          <td>Let us handle any scratches that you may have on your car</td>
                            </tr>
                            <tr>
                              <td>$2000</td>
                            <td>Full Engine Repair</td>
                          <td>Full engine repair to get your car up and running</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>

                      <div>
                      <Row className="justify-content-md-center">
                          <Col xs={7} sm={2} md={7}>
                        <Row>

                          <Card style={{ width: '18rem', height: '16rem' }}>
                            <Card.Img variant="top" src={OilChange} width={200} height={200} rounded />
                            <Card.Body>
                              <Card.Title>Oil Change</Card.Title>
                            </Card.Body>
                          </Card>

                          <Card style={{ width: '18rem', height: '16rem'}}>
                            <Card.Img variant="top" src={TireChange} width={200} height={200} rounded />
                            <Card.Body>
                              <Card.Title>Tire Change</Card.Title>
                            </Card.Body>
                          </Card>
                          </Row>
                          <Row>

                          <Card style={{ width: '18rem', height: '16rem' }}>
                            <Card.Img variant="top" src={CarPaint} width={200} height={200} rounded />
                            <Card.Body>
                              <Card.Title>Paint Touch Up</Card.Title>
                            </Card.Body>
                          </Card>

                          <Card style={{ width: '18rem', height: '16rem'}}>
                            <Card.Img variant="top" src={EngineRepair} width={200} height={200} rounded />
                            <Card.Body>
                              <Card.Title>Full Engine Repair</Card.Title>
                            </Card.Body>
                          </Card>

                        </Row>
                        </Col>
                    </Row>
                        <br />
                        <br />
                      </div>




                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div>
                        <h5>Modification Services</h5>
                        <Table>
                          <thead>
                            <tr>
                              <th>Price</th>
                            <th>Modification</th>
                          <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>$400</td>
                            <td>Tinted Windows</td>
                          <td>We tint you windows to give you a sleek feel</td>
                            </tr>
                            <tr>
                              <td>$800</td>
                            <td>Exhaust Modification</td>
                          <td>Be prepared for speed as we will upgrade your exhaust kit</td>
                            </tr>
                            <tr>
                              <td>$1200</td>
                            <td>Full Car Wrap</td>
                          <td>We will fully wrap your car with the livery design of your choice</td>
                            </tr>
                            <tr>
                              <td>$3000</td>
                            <td>Full Engine Tune</td>
                          <td>We will upgrade your engine to produce an extra 150hp</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>

                      <div>
                      <Row className="justify-content-md-center">
                          <Col xs={7} sm={2} md={7}>
                        <Row>

                          <Card style={{ width: '18rem', height: '16rem' }}>
                            <Card.Img variant="top" src={WindowTint} width={200} height={200} rounded />
                            <Card.Body>
                              <Card.Title>Tinted Windows</Card.Title>
                            </Card.Body>
                          </Card>

                          <Card style={{ width: '18rem', height: '16rem'}}>
                            <Card.Img variant="top" src={Exhaust} width={200} height={200} rounded />
                            <Card.Body>
                              <Card.Title>Exhaust Modification</Card.Title>
                            </Card.Body>
                          </Card>
                          </Row>
                          <Row>

                          <Card style={{ width: '18rem', height: '16rem' }}>
                            <Card.Img variant="top" src={CarWrap} width={200} height={200} rounded />
                            <Card.Body>
                              <Card.Title>Full Car Wrap</Card.Title>
                            </Card.Body>
                          </Card>

                          <Card style={{ width: '18rem', height: '16rem'}}>
                            <Card.Img variant="top" src={EngineTune} width={200} height={200} rounded />
                            <Card.Body>
                              <Card.Title>Full Engine Tune</Card.Title>
                            </Card.Body>
                          </Card>

                        </Row>
                        </Col>
                        </Row>
                        <br />
                        <br />
                      </div>




                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div>
                        <h5>Custom Vehicles</h5>
                        <Table>
                          <thead>
                            <tr>
                              <th>Price</th>
                            <th>Custom Vehicle</th>
                          <th>Description</th>

                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>$35,000</td>
                            <td>1994 Nissan Skyline GTR</td>
                          <td>Imported from Japan as one of the most iconic vehicles</td>
                            </tr>
                            <tr>
                              <td>$45,000</td>
                            <td>1995 E36 BMW M3</td>
                          <td>Car lovers dream imported straight from Germany</td>
                            </tr>
                            <tr>
                              <td>$60,000</td>
                            <td>1991 Dodge Viper</td>
                          <td>American Vehicle imported from straight across the boarder</td>
                            </tr>
                            <tr>
                              <td>$65,000</td>
                            <td>2008 Honda S2000</td>
                          <td>Legendary Japanese imported form Japan in January 2020</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>


                      <div id = "photogal">
                      <Row className="justify-content-md-center">
                          <Col xs={7} sm={2} md={7}>
                        <Row>

                          <Card style={{ width: '18rem', height: '16rem' }}>
                            <Card.Img variant="top" src={GTR} width={200} height={200} rounded />
                            <Card.Body>
                              <Card.Title>1994 Nissan Skyline GTR</Card.Title>
                            </Card.Body>
                          </Card>

                          <Card style={{ width: '18rem', height: '16rem'}}>
                            <Card.Img variant="top" src={m3} width={200} height={200} rounded />
                            <Card.Body>
                              <Card.Title>1995 E36 BMW M3</Card.Title>
                            </Card.Body>
                          </Card>
                          </Row>
                          <Row>

                          <Card style={{ width: '18rem', height: '16rem' }}>
                            <Card.Img variant="top" src={Viper} width={200} height={200} rounded />
                            <Card.Body>
                              <Card.Title>1991 Dodge Viper</Card.Title>
                            </Card.Body>
                          </Card>

                          <Card style={{ width: '18rem', height: '16rem'}}>
                            <Card.Img variant="top" src={s2000} width={200} height={200} rounded />
                            <Card.Body>
                              <Card.Title>2008 Honda s2000</Card.Title>
                            </Card.Body>
                          </Card>

                        </Row>
                        </Col>
                        </Row>
                        <br />
                        <br />
                      </div>
                    </Tab.Pane>
                  </Tab.Content>

                </Col>
              </Row>
            </Tab.Container>
            <br />
          </div>






          <div id = "bookApp">

            <Tab.Container id="left-tabs-example" defaultActiveKey="repbookapp">
                <Row>
                  <Col sm={2.5}><h3><Image src={IconB} height = {50} width = {50}/>Book an Appointment </h3></Col>
                  <Col sm={1}>
                    <Nav variant="pills" className="flex-column">
                      <NavDropdown title= "Appointment Type" id="nav-dropdown">
                        <NavDropdown.Item eventKey="repbookapp" >Repair</NavDropdown.Item>
                      <NavDropdown.Item eventKey="modbookapp">Modifications</NavDropdown.Item>
                    <NavDropdown.Item eventKey="custombookapp">Custom Vehicles</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>

                  </Col>
                  <br />
                <br />
              <br />
                </Row>
                <Row>

                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="repbookapp">

                        <Form>
                          <h5> Repair Appointment Form</h5><br />

                          <Register />

                        </Form>
                      </Tab.Pane>
                      <Tab.Pane eventKey = "modbookapp">

                        <Form>
                          <h5> Modification Appointment Form</h5><br />

                          <RegisterMod />
                        </Form>
                      </Tab.Pane>
                      <Tab.Pane eventKey = "custombookapp">

                        <Form>
                          <h5> Custom Vehicle Appointment Form</h5><br />
                          <RegisterCustom />
                        </Form>
                      </Tab.Pane>


                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
              <br />
            <br />

              </div>


          <div id = "mechanics">

            <h3><Image src={Iconm} height = {50} width = {50}/>Mechanics</h3>

            <CardDeck>
              <Card>
                <Card.Img variant="top" src={Ben} height = {250} width={500} />
                <Card.Body>
                  <Card.Title>Ben</Card.Title>
                  <Card.Text>
                    Ben is the owner of the shop and ensures that the luxurious brand of The Car Shop is at its finest.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Jorge} height = {250} width={500} />
                <Card.Body>
                  <Card.Title>Jorge</Card.Title>
                  <Card.Text>
                    Jorge is Ben's best friend and the best modification expert in the shop. He will ensure that your car will stand out!
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Jen} height = {250} width={500}/>
                <Card.Body>
                  <Card.Title>Jen</Card.Title>
                  <Card.Text>
                    Jen is the real powerhouse of the shop. She ensures that each car is up and running regardless of the problem.
                  </Card.Text>
                </Card.Body>

              </Card>
            </CardDeck>
          </div>



          </Col>

        </Row>
        </Container>
        </Tab.Pane>
        </Tab.Content>
















        <Tab.Content>
        <Tab.Pane eventKey = "japanese">

          <Container fluid = "md">
            <Row>
              <Col>


            <div>
              <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home"><h4>The Car Shop</h4></Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#sevicesJ"><Image src={Icons} height = {35} width = {35}/>サービス</Nav.Link>
                <Nav.Link href="#bookAppJ"><Image src={IconB} height = {35} width = {35}/>予約の予約</Nav.Link>
                <Nav.Link href = "#mechanicsJ"><Image src={Iconm} height = {35} width = {35}/>力学</Nav.Link>
                <ModalJap/>


                </Nav>

              </Navbar>
              <br />
            </div>

            <div>
                <h3>ショップへようこそ！</h3>
              <p>カーショップはあなたの車のニーズに合わせてカスタマイズされており、購入するカスタム車を提供しています！ 123 Main Street、バンクーバー、BC、カナダで私たちの店をチェックしてください！ また、私たちが提供しなければならない私たちのサービスと、ショップを運営しているスタッフの一部もチェックしてください！</p>
              <Row className="justify-content-md-center">
                  <Col xs={5} sm={2} md={9}>
                  <Image src={Shop} className="center" height={350} width={700} rounded/>
                  </Col>
              </Row>

            <br />
          <br />

            </div>




            <div id = "servicesJ">

              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={3}><h3> <Image src={Icons} height = {50} width = {50}/>サービス </h3>

                  </Col>
                  <Col sm={0.5}>
                    <Nav variant="pills" className="flex-column">
                      <NavDropdown title= "選択する" id="nav-dropdown">
                        <NavDropdown.Item eventKey="first" >修復</NavDropdown.Item>
                      <NavDropdown.Item eventKey="second">修正</NavDropdown.Item>
                    <NavDropdown.Item eventKey="third">カスタム車両</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>

                  </Col>
                  <br />
                <br />
              <br />
                </Row>

                <Row>
                  <Col sm={11}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <div>
                          <h5>修理サービス</h5>
                          <Table>
                            <thead>
                              <tr>
                                <th>価格</th>
                              <th>サービス</th>
                            <th>説明</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>$100</td>
                              <td>オイル交換</td>
                            <td>簡単で安価なオイル交換</td>
                              </tr>
                              <tr>
                                <td>$750</td>
                              <td>パンク修理</td>
                            <td>パンクしたタイヤや漏れているタイヤを交換します</td>
                              </tr>
                              <tr>
                                <td>$1000</td>
                              <td>タッチアップペイント</td>
                            <td>あなたの車にあるかもしれない傷を処理しましょう</td>
                              </tr>
                              <tr>
                                <td>$2000</td>
                              <td>完全なエンジン修理</td>
                            <td>車を稼働させるための完全なエンジン修理</td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>

                        <div>
                        <Row className="justify-content-md-center">
                            <Col xs={7} sm={2} md={7}>
                          <Row>

                            <Card style={{ width: '18rem', height: '16rem' }}>
                              <Card.Img variant="top" src={OilChange} width={200} height={200} rounded />
                              <Card.Body>
                                <Card.Title>オイル交換</Card.Title>
                              </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem', height: '16rem'}}>
                              <Card.Img variant="top" src={TireChange} width={200} height={200} rounded />
                              <Card.Body>
                                <Card.Title>タイヤ交換</Card.Title>
                              </Card.Body>
                            </Card>
                            </Row>
                            <Row>

                            <Card style={{ width: '18rem', height: '16rem' }}>
                              <Card.Img variant="top" src={CarPaint} width={200} height={200} rounded />
                              <Card.Body>
                                <Card.Title>タッチアップペイント</Card.Title>
                              </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem', height: '16rem'}}>
                              <Card.Img variant="top" src={EngineRepair} width={200} height={200} rounded />
                              <Card.Body>
                                <Card.Title>完全なエンジン修理</Card.Title>
                              </Card.Body>
                            </Card>

                          </Row>
                          </Col>
                          </Row>
                          <br />
                          <br />
                        </div>




                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div>
                          <h5>修正サービス</h5>
                          <Table>
                            <thead>
                              <tr>
                                <th>価格</th>
                              <th>変形</th>
                            <th>説明</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>$400</td>
                              <td>着色ウィンドウ</td>
                            <td>窓の色合いを調整して、なめらかな印象を与えます</td>
                              </tr>
                              <tr>
                                <td>$800</td>
                              <td>排気の変更</td>
                            <td>私たちはあなたの排気キットをアップグレードするので、速度に備えてください</td>
                              </tr>
                              <tr>
                                <td>$1200</td>
                              <td>フルカーラップ</td>
                            <td>私たちはあなたの車をあなたの選んだカラーリングデザインで完全に包みます</td>
                              </tr>
                              <tr>
                                <td>$3000</td>
                              <td>フルエンジンチューン</td>
                            <td>エンジンをアップグレードして、150hpを追加生産します</td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>

                        <div>
                        <Row className="justify-content-md-center">
                            <Col xs={7} sm={2} md={7}>
                          <Row>

                            <Card style={{ width: '18rem', height: '16rem' }}>
                              <Card.Img variant="top" src={WindowTint} width={200} height={200} rounded />
                              <Card.Body>
                                <Card.Title>着色ウィンドウ</Card.Title>
                              </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem', height: '16rem'}}>
                              <Card.Img variant="top" src={Exhaust} width={200} height={200} rounded />
                              <Card.Body>
                                <Card.Title>排気の変更</Card.Title>
                              </Card.Body>
                            </Card>
                            </Row>
                            <Row>

                            <Card style={{ width: '18rem', height: '16rem' }}>
                              <Card.Img variant="top" src={CarWrap} width={200} height={200} rounded />
                              <Card.Body>
                                <Card.Title>フルカーラップ</Card.Title>
                              </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem', height: '16rem'}}>
                              <Card.Img variant="top" src={EngineTune} width={200} height={200} rounded />
                              <Card.Body>
                                <Card.Title>フルエンジンチューン</Card.Title>
                              </Card.Body>
                            </Card>

                          </Row>
                          </Col>
                          </Row>
                          <br />
                          <br />
                        </div>




                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div>
                          <h5>カスタム車両</h5>
                          <Table>
                            <thead>
                              <tr>
                                <th>価格</th>
                              <th>カスタム車両</th>
                            <th>説明</th>

                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>$35,000</td>
                              <td>1994日産スカイライン</td>
                            <td>最も象徴的な車の1つとして日本から輸入</td>
                              </tr>
                              <tr>
                                <td>$45,000</td>
                              <td>1995 E36 BMW M3</td>
                            <td>車愛好家はドイツから直接輸入される夢を見る</td>
                              </tr>
                              <tr>
                                <td>$60,000</td>
                              <td>1991ダッジバイパー</td>
                            <td>国境を越えてまっすぐから輸入されたアメリカ車</td>
                              </tr>
                              <tr>
                                <td>$65,000</td>
                              <td>2008 Honda S2000</td>
                            <td>2020年1月に日本から輸入された伝説の日本車</td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>


                        <div id = "photogal">
                        <Row className="justify-content-md-center">
                            <Col xs={7} sm={2} md={7}>
                          <Row>

                            <Card style={{ width: '18rem', height: '16rem' }}>
                              <Card.Img variant="top" src={GTR} width={200} height={200} rounded />
                              <Card.Body>
                                <Card.Title>1994日産スカイライン</Card.Title>
                              </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem', height: '16rem'}}>
                              <Card.Img variant="top" src={m3} width={200} height={200} rounded />
                              <Card.Body>
                                <Card.Title>1995 E36 BMW M3</Card.Title>
                              </Card.Body>
                            </Card>
                            </Row>
                            <Row>

                            <Card style={{ width: '18rem', height: '16rem' }}>
                              <Card.Img variant="top" src={Viper} width={200} height={200} rounded />
                              <Card.Body>
                                <Card.Title>1991ダッジバイパー</Card.Title>
                              </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem', height: '16rem'}}>
                              <Card.Img variant="top" src={s2000} width={200} height={200} rounded />
                              <Card.Body>
                                <Card.Title>2008 Honda s2000</Card.Title>
                              </Card.Body>
                            </Card>

                          </Row>
                          </Col>
                          </Row>
                          <br />
                          <br />
                        </div>
                      </Tab.Pane>
                    </Tab.Content>

                  </Col>
                </Row>
              </Tab.Container>
              <br />
            </div>






            <div id = "bookAppJ">

              <Tab.Container id="left-tabs-example" defaultActiveKey="repbookapp">
                  <Row>
                    <Col sm={2.5}><h3><Image src={Iconm} height = {50} width = {50}/>予約を取る </h3></Col>
                    <Col sm={1}>
                      <Nav variant="pills" className="flex-column">
                        <NavDropdown title= "予約タイプ" id="nav-dropdown">
                          <NavDropdown.Item eventKey="repbookapp" >修復</NavDropdown.Item>
                        <NavDropdown.Item eventKey="modbookapp">修正</NavDropdown.Item>
                      <NavDropdown.Item eventKey="custombookapp">カスタム車両</NavDropdown.Item>
                        </NavDropdown>
                      </Nav>

                    </Col>
                    <br />
                  <br />
                <br />
                  </Row>
                  <Row>

                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="repbookapp">

                          <Form>
                            <h5> 修理予約フォーム</h5><br />

                            <RegisterJap/>

                          </Form>
                        </Tab.Pane>
                        <Tab.Pane eventKey = "modbookapp">

                          <Form>
                            <h5> 変更予定フォーム</h5><br />

                            <RegisterModJap />
                          </Form>
                        </Tab.Pane>
                        <Tab.Pane eventKey = "custombookapp">

                          <Form>
                            <h5> カスタム車両購入フォーム</h5><br />
                            <RegisterCustomJap />
                          </Form>
                        </Tab.Pane>


                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
                <br />
              <br />

                </div>


            <div id = "mechanicsJ">

              <h3><Image src={Iconm} height = {50} width = {50}/>力学</h3>

              <CardDeck>
                <Card>
                  <Card.Img variant="top" src={Ben} height = {250} width={500} />
                  <Card.Body>
                    <Card.Title>Ben</Card.Title>
                    <Card.Text>
                      ベンは店の所有者であり、カーショップの豪華なブランドが最高級であることを保証します。
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={Jorge} height = {250} width={500} />
                  <Card.Body>
                    <Card.Title>Jorge</Card.Title>
                    <Card.Text>
                      ホルヘはベンの親友であり、ショップで最も優れた改造の専門家です。 彼はあなたの車が目立つようにします！
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={Jen} height = {250} width={500}/>
                  <Card.Body>
                    <Card.Title>Jen</Card.Title>
                    <Card.Text>
                      ジェンはお店の本当の強みです。 彼女は、問題に関係なく、各車が稼働していることを確認します。
                    </Card.Text>
                  </Card.Body>

                </Card>
              </CardDeck>
            </div>



            </Col>

          </Row>
          </Container>



        </Tab.Pane>
        </Tab.Content>
        </Row>


      </Tab.Container>
      <br />
      <br />
      <br />

      <a href="https://icons8.com/"> Icons from ICON 8 </a>
      </Col>
      </Row>
      </Container>


      </>







    );
  }

}

export default App;
