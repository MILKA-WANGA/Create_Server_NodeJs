//Import http 
const http =require('http');
//create a function with request and responce arguments

//create server
const server1= http.createServer((req,res)=>
{
    console.log(req);
});
//set the port the server to listen at
server1.listen(3000);


