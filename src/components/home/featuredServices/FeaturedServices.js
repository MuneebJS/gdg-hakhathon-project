import React from 'react';
import Radium from 'radium';
import { Grid, Col, Row } from 'react-bootstrap'
import FeaturedServiceCard from './Card'
import Title from '../../Title'
import FaMotorcycle from 'react-icons/lib/fa/motorcycle';
import FaAutomobile from 'react-icons/lib/fa/automobile';
import FaDesktop from 'react-icons/lib/fa/desktop';
import FaCutlery from 'react-icons/lib/fa/cutlery';
import FaFemale from 'react-icons/lib/fa/female';
import FaKey from 'react-icons/lib/fa/key';
import FaLightbulbO from 'react-icons/lib/fa/lightbulb-o';
import FaPaintBrush from 'react-icons/lib/fa/paint-brush';
import FaWrench from 'react-icons/lib/fa/paint-brush';



class FeaturedServices extends React.PureComponent {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
             
                    <Col xs={12}>
                        <Title>Featured Services</Title>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <FeaturedServiceCard title="Plumbing" desc="If your bike needs tune up we can do it"
                            icon={ <FaWrench />}
                        />
                    </Col>
                <Col xs={12} sm={6} md={4}>
                        <FeaturedServiceCard title="Electrician" desc="If your bike needs tune up we can do it"
                            icon={ <FaLightbulbO />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <FeaturedServiceCard title="Bike Tune-up" desc="If your bike needs tune up we can do it"
                            icon={ <FaMotorcycle />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <FeaturedServiceCard title="Car Service" desc="If your bike needs tune up we can do it"
                            icon={ <FaAutomobile />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <FeaturedServiceCard title="Computer Repair" desc="If your bike needs tune up we can do it"
                            icon={ <FaDesktop />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <FeaturedServiceCard title="Cook" desc="If your bike needs tune up we can do it"
                            icon={ <FaCutlery />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <FeaturedServiceCard title="Maid" desc="If your bike needs tune up we can do it"
                            icon={ <FaFemale />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <FeaturedServiceCard title="Lock Crack Service" desc="If your bike needs tune up we can do it"
                            icon={ <FaKey />}
                        />
                    </Col>
                  
                    <Col xs={12} sm={6} md={4}>
                        <FeaturedServiceCard title="Home Decoration" desc="If your bike needs tune up we can do it"
                            icon={ <FaPaintBrush />}
                        />
                    </Col>
                    

                </Row>
            </Grid>


        )
    }
}

FeaturedServices = Radium(FeaturedServices);
export default FeaturedServices;