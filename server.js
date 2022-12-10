const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

// app.get('/api', (req, res) => {
// 	res.json({"users": ["userOne", "userTwo", "userThree"] })
// })

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}!`);
});
