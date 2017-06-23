const express = require('express');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    // let animeSearch = req.query;
    console.log('Sanity:Sanity:Sanity:Sanity:Sanity:');
    // AnimeModel.searchSeries(animeSearch, (err, series) => {
    //   res.status(err ? 400 : 200).send(err || series);
    // });
  });

module.exports = router;
