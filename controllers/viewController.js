const RESOURCE_PATH = '/pokemon'
const viewController = {
  index(req, res, next){
    res.render('pokemon/Index', res.locals.data)
  },
  show(req, res, next){
    res.render('pokemon/Show', res.locals.data)
  },
  edit(req, res, next){
    res.render('pokemon/Edit', res.locals.data)
  },
  newView(req, res, next){
    res.render('pokemon/New')
  },
  redirectHome(req, res, next){
    res.redirect(RESOURCE_PATH)
  },
  redirectShow(req, res, next){
    const pokemonId = req.params.id || res.locals.data.pokemon._id
    res.redirect(RESOURCE_PATH + `/${res.locals.data.pokemon.id}`)
  }
}

module.exports = viewController