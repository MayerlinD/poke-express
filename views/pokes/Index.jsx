const React = require('react');
const Default = require('../layouts/Default.jsx')

class Index extends React.Component{
    render(){
        const {pokemons} = this.props
        return(
            <Default title="Pokemon Index Page">
                <nav>
                    <a href="/pokemons/new">Create a New Pokemon</a>
                </nav>
                <ul>
                    {
                        pokemons.map((pokemon) => {
                            const {name, color, image} = pokemon
                            return (
                                <li key={pokemon._id}>
                                    <a href={`/pokemons/${pokemon._id}`}>
                                    {name}</a> is {color}
                                    
                                     <br/>
                                    {
                                        <img src={`${image}`}/>
                                    }
                                    <br/>
                                    <form method="POST" action={`/pokemons/${pokemon._id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${color} ${name}`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = Index