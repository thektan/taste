const express = require('express');

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.static(__dirname));

app.get(
  '*',
  (req, res) => res.sendFile(
    '/index.html',
    {root: __dirname}
  )
);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
