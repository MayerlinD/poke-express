const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render(){
        return (
            <Default title="Create A New Pokemon">
            <form method="POST" action="/pokemons">
                Name: <input type="text" name="name" placeholder='Name of Pokemon Here'></input><br/>
                Color: <input type="text" name="color" placeholder='Color of Pokemon Here'></input><br/>
                Image: <input type="text" name="image" placeholder={image}/><br />
                <input type="submit" value="Submit Fruit"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New