const express = require('express');
const cors = require('cors')

const app = express();
const path = require('path')
app.use(express.json());
app.use(express.static(__dirname));
app.use(cors());

app.get('/home',function(req,res){
    res.send("Hello World");
})
app.get('/login',function(req,res){
    res.sendfile(path.resolve(__dirname,"menu.html"));
})
if(process.env.NODE_ENV === 'production'){
    app.listen();
}
else{
    const port = process.env.PORT || 5000;
    app.listen(port, ()=>console.log(`Server started on port ${port}`));
}