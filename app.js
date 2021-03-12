const express = require('express')
const app  = express()      

const notes = [
    'Some awesome note 1',
    'Some awesome note 2',
    'Some awesome note 3'
];

app.use('/static', express.static('public'))

app.set('view engine', 'pug')

app.get('/', (req, res) => {
	res.render('home')
})

app.get('/create', (req, res) => {
	res.render('create')
})

app.get('/notes', (req, res) => {
	res.render('notes', { n: notes })
})

app.get('/notes/1', (req, res) => {
	res.render('detail')
})

app.listen(8000, err => {
	if (err) throw err

	console.log('App is running...')
})