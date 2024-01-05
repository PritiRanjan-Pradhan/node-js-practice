const http = require("http");
const fs = require("fs");
const path = require("path");

const currentDir = path.join(__dirname);
console.log(`${currentDir}\\sample.txt`);
const port = process.env.PORT || 3000;
const server = http.createServer((req, resp) => {
  if (req.url === "/") {
    resp.write("<html>");
    resp.write("<head><title>Hello</title></head>");
    resp.write("<body>");
    resp.write("<form action = '/message' method = 'POST'>");
    resp.write(
      "<input type = 'text' placeholder = 'Enter a message' name='message'/><button type='submit'>Send</button>"
    );
    resp.write("</form>");
    resp.write("</body>");
    resp.write("</html>");
    return resp.end();
  }

  if (req.url === "/message" && req.method === "POST") {
    let input = "";
    req.on("data", (chunk) => {
      console.log(chunk);
      input = chunk;
    });

    req.on("end", () => {
      fs.writeFileSync(`${currentDir}\\sample.txt`, input);
    });

    resp.statusCode = 302;
    resp.setHeader("Location", "/");
    return resp.end();
  }
  resp.write("<html>");
  resp.write("<head><title>Hello</title></head>");
  resp.write("<body><h1>First Programme</h1></body>");
  resp.write("</html>");
  resp.end();
});
server.listen(port);
