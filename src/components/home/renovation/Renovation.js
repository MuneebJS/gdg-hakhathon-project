import React from 'react';
import Radium from 'radium';
import { Grid, Col, Row } from 'react-bootstrap'
import RenovationCard from './Card'
import Title from '../../Title'
import FaMotorcycle from 'react-icons/lib/fa/motorcycle';
import FaChain from 'react-icons/lib/fa/chain';
import FaAdjust from 'react-icons/lib/fa/adjust';
import FaClone from 'react-icons/lib/fa/clone';
import FaExpeditedssl from 'react-icons/lib/fa/expeditedssl';

var styles = {
    wrap: {
        marginBottom: 50
    }
}

class Renovation extends React.PureComponent {
    render() {
        return (
            <Grid style={styles.wrap}>
                <Row className="show-grid">
                    <Col xs={12}>
                        <Title>ALL STAGES OF THE RENOVATION</Title>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <RenovationCard title="Reliability" desc="Curabitur sodales massa velit, id dapibus nunc efficitur at. Quisque elementum magna quis ante suscipit, quis fermentum augue viverra."
                            icon={ <FaChain />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <RenovationCard title="Affordability" desc="Curabitur sodales massa velit, id dapibus nunc efficitur at. Quisque elementum magna quis ante suscipit, quis fermentum augue viverra."
                            icon={ <FaAdjust />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <RenovationCard title="convenience" desc="Curabitur sodales massa velit, id dapibus nunc efficitur at. Quisque elementum magna quis ante suscipit, quis fermentum augue viverra."
                            icon={ <FaClone />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <RenovationCard title="Security" desc="Curabitur sodales massa velit, id dapibus nunc efficitur at. Quisque elementum magna quis ante suscipit, quis fermentum augue viverra."
                            icon={ <FaExpeditedssl />}
                        />
                    </Col>

                </Row>
            </Grid>


        )
    }
}

Renovation = Radium(Renovation);
export default Renovation;