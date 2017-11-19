import React from 'react';
import Radium from 'radium';
import globalConst from '../../../globalConst';
import SubTitle from '../../SubTitle';

var styles = {
    wrap: {
        textAlign: 'center',
        marginTop: 10,
    },
    icon: {
        width: "100%",
        display: "block",
        fontSize: 100,
        color: globalConst.themeColor,
        height: 125,
        marginBottom: 20
    },
    desc: {
        fontSize: 16,
        lineHeight:" 1.5em",
        marginTop: 20,
        marginBottom: 10
    }
}

class RenovationCard extends React.PureComponent {
    render() {
        return (
            <div style={styles.wrap}>
                <i style={styles.icon}>
                    {this.props.icon}
                </i>
                <SubTitle>
                    {this.props.title}
                </SubTitle>
                <p style={styles.desc}>
                    {this.props.desc}
                </p>               
                </div>
        )
    }
}

RenovationCard = Radium(RenovationCard);
export default RenovationCard;

