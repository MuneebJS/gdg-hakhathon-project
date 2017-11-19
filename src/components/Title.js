import React  from 'react';
import Radium from 'radium';

var styles = {
    textAlign: 'center',
    textTransform: 'uppercase',
    margin: '58px 0 45px 0',
    color: '#333',
    fontWeight: 600

}

class Title extends React.PureComponent {
    render() {
        return(
        <h2 style={styles}>
            {this.props.children}
        </h2>   
        )
    }
}

Title = Radium(Title);
export default Title;