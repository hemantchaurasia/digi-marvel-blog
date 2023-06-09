import express from "express";
import React from "react";
import {renderToString} from "react-dom/server"

const app = express();

app.get('/*', (req, res) => {
const reactApp = renderToString(
    <h1>Hello from Server!!</h1>
);
return res.send(`
<html>
<body>
    <div id="root">${reactApp}</div>
</body>
</html>`);
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})