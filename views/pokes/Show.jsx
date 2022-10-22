const React = require('react');
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
   
    render(){
        const {name, color, image, _id} = this.props.pokemon
        const capName = name[0].toUpperCase() + name.substring(1)
        return(
        <Default title={`${capName} Show Page`} pokemon={this.props.pokemon}>
            <p>{capName} is {color}</p><br />
            <img src={`${image}`}/>
        </Default>
        )
   } 
}

module.exports = Show