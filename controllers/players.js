const Player = require('../models/player')

module.exports = {
    index,
    show,
    new: newPlayer,
    create
    // shorthande for index:index

}

function index(req,res){
    res.render('players/index',{
        players: Player.getAll()
    })
}

function show(req, res){
	console.log(req.params,  " < - req.params in show function")
	res.render('players/show', {
		playerNum: req.params.id,
		player: Player.getOne(req.params.id)
	})
}

function newPlayer(req,res){
    res.render('players/new')
}

function create(req,res){
    console.log(req.body,' contents of the form')
    //creates always respond with a redirect
    res.redirect('/players');
    Player.create(req.body)
}