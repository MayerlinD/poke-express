const React = require('react')
const Default = require('../layouts/Default.jsx')


class Edit extends React.Component {
    render(){
        const {name, _id, color, image} = this.props.pokemon
        return (
            <Default title={`${name} Edit Page`} pokemon={this.props.pokemon}>
                <form method="POST" action={`/pokemon/${_id}?_method=PUT`}>
                    Name: <input type="text" name="name" defaultValue={name}></input><br/>
                    Color: <input type="text" name="color" defaultValue={color}></input><br />
                    Image: <input type="text" name="image" placeholder={image}/><br />
                    <input type="submit" value="Edit Pokemon" />
                </form>
            </Default>
        )
    }
}

module.exports = Edit