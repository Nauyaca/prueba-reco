const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json([
    {
      nameUser: "Bobtoronja",
      email: "pantalones_cuadrados@hive.com",
      description: "Hi! This is my profile"
    }
  ])
})

module.exports = router
