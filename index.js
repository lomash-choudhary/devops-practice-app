const express = require("express");


const app = express()
const port = 3000;

app.get("/", (req, res) => {
	res.json({
		message:"hello from server running on port 3000"
	})

})

app.listen(port, () => {
	console.log(`App is listening on port : ${port}`)
});
