const express = require("express");
const router = express.Router();
const selectCenter = require("../sql/totaltrainermap/select");

router.get("/", (req, res) => {
  selectCenter.selectCenterAll((err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(result); // json으로 응답하도록 수정
    }
  });
});

router.get("/centerall", (req, res) => {
  selectCenter.selectCenter((err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(result); // json으로 응답하도록 수정
    }
  });
});

router.post("/currentlocation", (req, res) => {
  selectCenter.selectCurrentLocation(req.body, (err, result) => {
    if (err) {
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = router;
