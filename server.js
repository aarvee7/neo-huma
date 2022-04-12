const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
app.use(requireHTTPS);
app.use(express.static(__dirname+ "./dist/neohuma"));



app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/neohuma/'}
  );
  });

app.listen(port, () => {
    console.log(`app running on ${port}`);
  });

  function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

