const http = require('http');
const conection = require('./conection')

const hostname = 'https://zen-joliot-2182a3.netlify.app/';
const port = 3000;




const server = http.createServer(async(req, res) => {
    console.log(req.method);
    if (req.url === "/form" && req.method === "POST") {
        //Hyper Text Transfer Protocol
        //GET -> Obtener datos
        //POST
        //PUT -> Actualizar datos o crearlos si no existen
        //DELETE -> Borrar datos
        //PATCH -> Parecido al PUT, pero solo actualiza
        res.writeHead(200, {
            "Content-Type": "application/json",
        })

        const buffers = [];

        for await (const chunk of req) {
            buffers.push(chunk);
        }

        const data = Buffer.concat(buffers).toString();

        const body = JSON.parse(data);

        console.log(body); // 'Buy the milk'

        conection.conection.connect((error) => {

            if (error) throw error;
            console.log("Conectado c:");
        })

        conection.insertar(body);

        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando en ${localhost}:${port}/`);
});
