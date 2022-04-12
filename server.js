const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;
//app.use(requireHTTPS);
app.use(express.static(__dirname+ '/dist/neohuma'));



app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/neohuma/index.html')
  );
  });

app.listen(port, () => {
    console.log(`app running on ${port}`);
  });

//   function requireHTTPS(req, res, next) {
//     // The 'x-forwarded-proto' check is for Heroku
//     if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
//         return res.redirect('https://' + req.get('host') + req.url);
//     }
//     next();
}

