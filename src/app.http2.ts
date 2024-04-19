import http2 from "http2";
import fs from "fs";

const server = http2.createSecureServer( {
    key: fs.readFileSync("./keys/server.key"),
    cert: fs.readFileSync("./keys/server.crt")
} , (req, res) => {
    console.log(req.url);

    // res.writeHead(200, { "Content-Type" : "text/html" });
    // res.write("<h1>Hola mundo!</h1>")
    // res.end();

    if ( req.url === "/") {
        const htmlFIle = fs.readFileSync("./public/index.html" , "utf-8");
        res.writeHead(200, { "Content-Type" : "text/html" })
        res.end(htmlFIle)
    } else {
        res.writeHead(404, { "Content-Type" : "text/html" });
        res.end()
    }
})


server.listen(8080, () => {
    console.log("Server running on port 8080")
})


