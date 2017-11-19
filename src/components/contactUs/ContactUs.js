import React from 'react';
import { Link } from 'react-router'
import Radium from 'radium';
import { Grid, Col, Row } from 'react-bootstrap'
import Subtitle from '../SubTitle';
import Title from '../Title';
import globalConst from '../../globalConst';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';
import FaGooglePlusSquare from 'react-icons/lib/fa/google-plus-square';
import globalStyles from '../../globalStyle';
import Map from './Map'
import Button from '../../components/Button'

var styles = {
    mapWrap: {
        padding: 0
    },
    mapStyle: {
        height: 400,
        width: '100%',
        border: 'none'
    },
    inputStyle: {
        width: "100%",
        marginTop: 20,
        background: "#eee",
        border: 0,
        height: 40,
        fontWeight: 'bold',
        padding: 10
    },
    textAreaStyle: {
        marginTop: 20,
        background: "#eee",
        border: 0,
        height: 150,
        width: '100%',
        fontWeight: 'bold',
        padding: 10
    },
    formWrap: {
        marginBottom: 40
    },
    buttonStyle: {
        marginTop: 20,
        textAlign: 'right',
    },
    ul: {
        listStyle: "none",
        padding: 0
    },
    ulTitle: {
        fontWeight: 'bold',
    },
    cntctInofWrap: {
        background: "#f7f7f7",
        display: "inline-block",
        width: "100%",
        margin: "30px 0 30px 0",
        color:" #888",
        padding: "32px 35px",
        // marginTop: 200,
        // paddingTop: 3000
    }
}

class ContactUs extends React.PureComponent {
    render() {
        return (
            <div>
                <Grid fluid style={styles.mapWrap}>
                    <div >
                        <iframe style={styles.mapStyle} src="https://maps.google.com/maps?q=12.927923,77.627108&z=15&output=embed"></iframe>
                    </div>
                </Grid>

                <Grid style={styles.formWrap}>
                    <Row className="ContactUs_wrapper">
                        <Col xs={12}>
                            <Col xs={12}>
                                <Title>Contact Us</Title>
                            </Col>
                        </Col>
                        <Col key={1} xs={12} md={4} style={[globalStyles.margin10, { marginBottom: 40 }, styles.cntctInofWrap
                        ]} >
                         
                                <Subtitle>
                                    Contact Info
                            </Subtitle>
                      
                                <div >
                                    <span style={{
                                        display: 'block',
                                        fontSize: 18,
                                        marginBottom: 15

                                    }}> 21 St. building # 83 <br />Askari IV, Karachi</span>
                                    <span style={{
                                        fontWeight: 'bold',
                                        marginRight: 20
                                    }}>
                                    Phone:
                                    </span>
                                     <span>(123) 123-456 </span> <br />
                                     <span style={{
                                        fontWeight: 'bold',
                                        marginRight: 20
                                    }}>
                                    Email:
                                    </span>
                                     <span>office@example.com</span> <br />
                                </div>
                          
                        </Col>
                        <Col key={2} xs={12} md={8} style={[globalStyles.margin10, { marginBottom: 40 },]} >
                            <Row>
                                <Col><Subtitle >Get in touch with us</Subtitle></Col>
                                <Col xs={12} >
                                    <input style={
                                        styles.inputStyle
                                    } ref="name" placeholder="Name" />
                                </Col>
                                <Col xs={12} >
                                    <input style={
                                        styles.inputStyle
                                    } ref="phone" placeholder="Phone" />
                                </Col>

                                <Col xs={12} >
                                    <input style={
                                        styles.inputStyle
                                    } ref="email" placeholder="Email" />
                                </Col>
                                <Col xs={12} >
                                    <textarea key={"textArea"} style={
                                        styles.textAreaStyle
                                    } ref="message" placeholder="Your Message" />
                                </Col>
                                <Col xs={12} style={styles.buttonStyle}>
                                    <Button base>Send Message</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}


ContactUs = Radium(ContactUs);
export default ContactUs;