import React from 'react';
import {Link} from 'react-router';
import Radium from 'radium';
import globalConst from '../../../globalConst';
import SubTitle from '../../SubTitle';
import img1 from '../../../assets/images/slide-01.jpg'
import {Image} from 'react-bootstrap'
import PropTypes from 'prop-types'

require('./card.css')


var styles = {
    icon: {

    },
    overlay: {
        background: globalConst.themeColor
    },
    desc: {
        fontSize: 16,
        lineHeight: '1.5em',
    },
    link: {
        fontWeight: "bold",
        fontSize: 18,
        color:"#fff",
    }
}

class AllServicesCard extends React.PureComponent {
    render() {
        return (
            <div className="service">                
            <Image src={img1} alt="" responsive/>
            <div className="service-overlay" style={styles.overlay}>
            <i key={"icon"} style={styles.icon} className="icon">
                {this.props.icon}
            </i> 
            <SubTitle white={true}>{this.props.subTitle}</SubTitle>
                <div className="hidden-part">
                    <p style={styles.desc}>{this.props.desc}</p>
                    <Link style={styles.link} to={this.props.link}>Read More</Link>
                </div>
            </div>
        </div>
        )
    }
}


// AllServicesCard.prototype = {
//     icon: PropTypes.element.isRequired,
//     desc: PropTypes.string.isRequired,
//     link: PropTypes.string
// }

AllServicesCard = Radium(AllServicesCard);
export default AllServicesCard;

