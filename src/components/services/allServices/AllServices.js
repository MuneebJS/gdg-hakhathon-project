import React from 'react';
import Radium from 'radium';
import { Grid, Col, Row } from 'react-bootstrap'
import AllServicesCard from './Card'
import Title from '../../Title'
// import FaMotorcycle from 'react-icons/lib/fa/motorcycle';
// import FaChain from 'react-icons/lib/fa/chain';
// import FaAdjust from 'react-icons/lib/fa/adjust';
// import FaClone from 'react-icons/lib/fa/clone';
// import FaExpeditedssl from 'react-icons/lib/fa/expeditedssl';
import FaLightbulbO from 'react-icons/lib/fa/lightbulb-o';


var styles = {
    wrap: {
        marginBottom: 50
    }
}

class AllServices extends React.PureComponent {
    render() {
        return (
            <Grid style={styles.wrap}>
                <Row className="show-grid">
                    <Col xs={12}>
                        <Title>Our Services</Title>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <AllServicesCard subTitle="Electrician" desc="We have best electrician which can satisfy your needs"
                            icon={<FaLightbulbO />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <AllServicesCard subTitle="Electrician" desc="We have best electrician which can satisfy your needs"
                            icon={<FaLightbulbO />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <AllServicesCard subTitle="Electrician" desc="We have best electrician which can satisfy your needs"
                            icon={<FaLightbulbO />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <AllServicesCard subTitle="Electrician" desc="We have best electrician which can satisfy your needs"
                            icon={<FaLightbulbO />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <AllServicesCard subTitle="Electrician" desc="We have best electrician which can satisfy your needs"
                            icon={<FaLightbulbO />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <AllServicesCard subTitle="Electrician" desc="We have best electrician which can satisfy your needs"
                            icon={<FaLightbulbO />}
                        />
                    </Col>
                </Row>
            </Grid>


        )
    }
}

AllServices = Radium(AllServices);
export default AllServices;