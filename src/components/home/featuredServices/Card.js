import React from 'react';
import Radium from 'radium';
import globalConst from '../../../globalConst';
import SubTitle from '../../SubTitle';
require('./card.css')


var styles = {
    desc: {
        margin: '0 0 17px',
        color: '#333',
        fontSize: 16        

    },
    link: {
        height: 176,
        padding: "37px 50px",
        display: "inline-block",
        marginBottom: 30,
        background: '#eee',
        ':hover' : {
            background: globalConst.themeColor,
        
        }
    },
    icon: {
        fontSize: 72,
        color: globalConst.themeColor,
        float: "left",
        display: "inline-block",
        marginRight: 26,
        height: 176,
        marginTop: -10,
        // ':hover': {
        //     color: '#fff'
        // }
    },  

}

class FeaturedServiceCard extends React.PureComponent {
    render() {
        return (
            <a href="#" style={styles.link} className="featured_ser_card">
                <i key={"icon"} style={styles.icon} className="icon">
                    {this.props.icon}
                </i>
                 <SubTitle class="title">{this.props.title}</SubTitle>
                <p style={styles.desc} className="desc">{this.props.desc}</p>
            </a>
        )
    }
}

FeaturedServiceCard = Radium(FeaturedServiceCard);
export default FeaturedServiceCard;

