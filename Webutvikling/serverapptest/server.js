const express = require('express');
const res = require('express/lib/response');
const { readFileSync, writeFileSync, writeFile } = require('fs');

const app = express();

app.get('/', (req, res) => {
    const count = readFileSync('./count.txt', 'utf-8');
    console.log('count.txt', count)

    const newCount = parseInt(count) + 1

    writeFileSync('./count.txt', newCount.toString());

    res.send(` 

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Monzers webapp</title>
    </head>
    <body>
        <h1>Welcome to the world's most advanced webapp</h1>
        <p>This page has been viewed  ${newCount} times!</p>
    </body>
    </html> 
    `); //apparantly this shit uses the accent as quotes. pain in my ass -borat


});

app.listen(5000, () => console.log('http://localhost:5000/'));
