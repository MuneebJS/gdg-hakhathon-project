import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

var styles = {
    default: {
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 600,
        fontSize: 18,
        letterSpacing: 1,
        textTransform: 'uppercase',
    },

    white: {
        color: '#fff'
    },
    black: {
        color: '#333'
    }
}

class SubTitle extends React.PureComponent {
    render() {
        return (
            <h4 key={1} style={[styles.default, this.props.white ? styles.white : styles.black]} className={this.props.class}>
                {this.props.children}
            </h4>
        )
    }
}

SubTitle.propTypes = {
    white: PropTypes.bool,
    children: PropTypes.node.isRequired
};

SubTitle = Radium(SubTitle);
export default SubTitle;