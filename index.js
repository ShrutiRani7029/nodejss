//ab hm server bnaenge;

//3-steps
//1.import a package like http
const http=require('http');
//2.create a server
const server=http.createServer((req,res)=>{
   res.end("<h1>server is working</h1>")
});
//3.start the server
server.listen(5000, ()=>{
    console.log("server is working");
});