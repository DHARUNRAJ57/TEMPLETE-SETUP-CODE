const app = require("./app")

const PORT = process.env.PORT || 5019

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})