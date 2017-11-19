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
        // background: globalConst.themeColor3,
        color: '#999999',
        paddingTop: 50,
        // marginTop: 100,
        marginBottom: 100

    },



}

class PageNotFound extends React.PureComponent {
    render() {
        return (
            <Grid fluid style={styles.wrap} >
                <Grid>
                    <Row className="PageNotFound_wrapper">
                        <Col xs={12} style={globalStyles.margin10} >
                           <h1>Sorry! your requested page could not be found</h1>
                        </Col>
                    </Row>
                </Grid>
            </Grid>
        )
    }
}

PageNotFound = Radium(PageNotFound);
export default PageNotFound;