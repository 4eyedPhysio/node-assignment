// const http = require(`http`);
// const serv = http.createServer((Req,Res)=>{
//     console.log("Michael");
//     Res.write(`this is me too`)
//     Res.end(`hello Michael, i'm from the server`);
// })
// serv.listen(8000,`127.0.0.1`, ()=>{
//     console.log("server started");
// })

// 
//  const {books,author}= require(`./fixtures`);
//  const PORT = 8000;
//  const HOST_NAME = `127.0.0.1`;

//  function requestHandler(req,res){
//     switch (req.url){
//         case "/books" : res.end(JSON.stringify(books))
//         break;
//         case "/author" : res.end(JSON.stringify(author))
//         break;
//         default: res.writeHead(404)
//         res.end("server is not found")
//     }

//  };


// const server = http.createServer(requestHandler);
// server.listen(PORT, HOST_NAME, ()=>{
//     console.log(`server is listening on port ${PORT}`)
// })


const http = require(`http`);
const fs = require(`fs`);
const path= require(`path`);

const bookPath = path.join(__dirname,`DB`,`fixt.json`);
console.log(bookPath);


 const PORT = 8000;
 const HOST_NAME = `127.0.0.1`;

 function requestHandler(req,res){
   if (req.url === `/books`&& req.method ==="GET"){
    console.log("get request to book route");
   }else if( req.url === `/books` && req.method === "PUT"){
    console.log("put request to books route");
   }else if( req.url === `/books` && req.method === "DELETE"){
    console.log("delete request to books route");
   }else if ( req.url === `/books/author/` && req.method === "GET"){
      console.log("get request to books and author")
   }else if ( req.url === `/books/author/` && req.method === "POST"){
    console.log("get request to books and author")
 }else if ( req.url === `/books/author/` && req.method === "PUT"){
    console.log("get request to books and author")
 }
 else {
    res.writeHead(404);
    console.log("route not found");
 }
 }

 const server = http.createServer(requestHandler);


 server.listen(PORT,HOST_NAME, ()=>{
    bookDB = JSON.parse(fs.readFileSync(bookPath,`utf8`));
    console.log(`server is listening on ${HOST_NAME}:${PORT}`);


   
 }
 );



