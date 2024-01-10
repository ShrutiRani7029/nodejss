//ab hm server bnaenge;


//3-steps
//1.import a package like http
import http from "http"
//import name from "./module1.js";
//import {n1,n2} from "./module1.js";

///print it as object
import * as obj from "./module1.js";
import { generatepercent } from "./module1.js";
import fs from "fs"
import path from "path";

console.log(path.dirname("/home/random/index.js"));

const home = fs.readFileSync("./index.html");
//console.log(generatepercent());

console.log(home);

//2.create a server
const server=http.createServer((req,res)=>{
   //res.end("<h1>server is working</h1>")

   if(req.url==="/about"){
    res.end(`<h1>LOVE IS ${generatepercent()}</h1>`);
   }
   else if(req.url==="/"){
    res.end(home);
   }
   else{
    res.end("<h1>page not found</h1>");
   }
});
//3.start the server
server.listen(5000, ()=>{
    console.log("server is working");
});