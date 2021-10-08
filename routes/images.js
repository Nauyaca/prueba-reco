const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json([
    {
      name : "Picture Main",
      description: "Created for a user 1"
    },
    {
      name : "Picture Second",
      description: "Created for a user 2"
    }
  ])
})

router.get('/trend', (req, res) => {
  res.json([
    {
      name : "Picture Main",
      description: "Created for a user 1"
    }
  ])
})

module.exports = router
