import React from 'react';
import { Link } from 'react-router'
import Radium from 'radium';
import { Grid, Col, Row } from 'react-bootstrap'
import Subtitle from './SubTitle';
import globalConst from '../globalConst';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';
import FaGooglePlusSquare from 'react-icons/lib/fa/google-plus-square';
import globalStyles from '../globalStyle';
// require('../global.css');


var styles = {
    wrap: {
        background: globalConst.themeColor3,
        color: '#999999',
        paddingTop: 50,
    },
    desc: {
        fontSize: 16,
        lineHeight: '2em',
        // color: '#999999'
    },
    footerContact: {
        color: '#ddd',
        lineHeight: '2em'
    },
    ul: {
        listStyle: 'none',
        fontSize: 18,
        paddingLeft: 0
    },

    li: {
        paddingTop: 10
    },
    socialLi: {
        listStyle: "none",
        display: "inline-block",
        fontSize: "3.5em",
        padding: "10px 15px 0 0",
    },
    socialUl: {
        paddingLeft: 0
    },
    socialAnchorFb: {
        color: '#999999',
        ':hover' : {
            color: '#4a6d9d',
        }
    },
    socialAnchorTw: {
        color: '#999999',
        ':hover' : {
            color: '#3bc1ed',
        }
    },
    socialAnchorGp: {
        color: '#999999',
        ':hover' : {
            color: '#DB4437',
        }
    },
    copyWrap: {
        marginTop: 35,
        padding: '30px 0',
        textAlign: 'center',
        borderTop: globalConst.borderStyle1,
        
    },
    copyBorder: {
    }



}

class Footer extends React.PureComponent {
    render() {
        return (
            <Grid fluid style={styles.wrap} >
                <Grid>
                    <Row className="footer_wrapper">
                        <Col xs={12} md={6} style={globalStyles.margin10} >
                            <Subtitle white>About</Subtitle>
                            <p style={styles.desc}>
                                Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.
                            </p>
                            <ul style={styles.socialUl}>
                                <li style={styles.socialLi}>
                                    <a href="#" key={1} style={styles.socialAnchorFb}>
                                        <FaFacebookSquare />
                                    </a>
                                </li>
                                <li style={styles.socialLi}>
                                    <a href="#" key={2} style={styles.socialAnchorTw}>
                                        <FaTwitterSquare />
                                    </a>
                                </li>
                                <li style={styles.socialLi}>
                                    <a href="#" key={3} style={styles.socialAnchorGp}>
                                        <FaGooglePlusSquare />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={12} md={3} style={globalStyles.margin10}>
                            <Subtitle white>Helpfull links</Subtitle>
                            <ul style={styles.ul}>
                                <li style={styles.li}><Link activeClassName="active" style={{color: '#999999'}} >Services</Link></li>
                                <li style={styles.li}><Link activeClassName="active" style={{color: '#999999'}}>Blog</Link></li>
                                <li style={styles.li}><Link activeClassName="active" style={{color: '#999999'}}>Contact</Link></li>
                                <li style={styles.li}><Link activeClassName="active" style={{color: '#999999'}}>About Us</Link></li>
                            </ul>

                        </Col>
                        <Col xs={12} md={3} style={globalStyles.margin10}>
                            <Subtitle white>Contacts</Subtitle>
                            <div>
                                <span style={styles.footerContact}>12345 Little Lonsdale St, Melbourne</span> <br />
                                Phone: <span style={styles.footerContact}>(123) 123-456 </span><br />
                                Fax: <span style={styles.footerContact}>(123) 123-456</span> <br />
                                E-Mail:<span style={styles.footerContact}> office@example.com </span><br />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} style={styles.copyWrap}>
                        &copy; Copyright 2016 by <Link>Farrukh</Link>. All Rights Reserved.
                        </Col>
                    </Row>
                </Grid>
            </Grid>
        )
    }
}

Footer = Radium(Footer);
export default Footer;