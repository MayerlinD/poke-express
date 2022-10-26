const React = require('react');

class Default extends React.Component {
    render(){
        const {pokemon, title} = this.props
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/app.css"></link>
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href="/pokemon">Go to Pokemon Home Page</a><br></br>
                        <a href="/pokemon/new">Create a New Pokemon</a><br></br>
                        { pokemon? <a href={`/pokemon/${pokemon._id}/edit`}> {pokemon.name} Edit Page </a> : ''}<br></br>
                        { pokemon? <a href={`/pokemon/${pokemon._id}`}>{pokemon.name} Show Page</a> : ''}<br></br>
                    </nav>
                    <h1>
                        {title}
                    </h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default