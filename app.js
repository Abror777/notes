const express = require('express')
comst app  = express

app.set('view engine', 'pug')
app.get('/', (req, res)=> {
	//todo - Handler for root URL
})

app.listen(8000, err => {
	iff (err) throw err

	console.log('App is running...')
})