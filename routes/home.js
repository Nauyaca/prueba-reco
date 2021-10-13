const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json([
    {
      description: "Welcome to THE HIVE! This is a community where all build a hive of pictures"
    }
  ])
})

module.exports = router
