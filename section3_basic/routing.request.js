const http = require("http");

const port = process.env.PORT || 3000;
const server = http.createServer((req, resp) => {
  if (req.url === "/") {
    resp.write("<html>");
    resp.write("<head><title>Hello</title></head>");
    resp.write("<body><h1>Home Page</h1></body>");
    resp.write("</html>");
    return resp.end();
  }

  if (req.url === "/message") {
    resp.write("<html>");
    resp.write("<head><title>Hello</title></head>");
    resp.write("<body><h1>Please provide a message</h1></body>");
    resp.write("</html>");
    return resp.end();
  }
  resp.write("<html>");
  resp.write("<head><title>Hello</title></head>");
  resp.write("<body><h1>First Programme</h1></body>");
  resp.write("</html>");
  resp.end();
});
server.listen(port);
