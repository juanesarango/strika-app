// Setup Express Server
const serverless = require('serverless-http')
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const AWS = require('aws-sdk')
const verifier = require('firebase-token-verifier')

const app = express()
app.use(cors())

// Validate auth token from headers
app.use(async (req, res, next) => {
  let verified
  console.log(req)
  const token = req.header('Authorization')
  if (token) {
    try {
      verified = await verifier.verify(token)
    } catch (err) {
      res.status(401).json({ error: 'Auth Token is invalid.' })
      return
    }
    req.user = verified
    next()
  } else {
    res.status(401).json({ error: 'Auth Token is missing.' })
  }
})

// Configure DynamoDB
const USERS_TABLE = process.env.USERS_TABLE
const SCORES_TABLE = process.env.SCORES_TABLE

dynamoDb = new AWS.DynamoDB.DocumentClient()

// Get User endpoint
app.get('/users/:userId', function (req, res) {
  const params = {
    TableName: USERS_TABLE,
    Key: {
      userId: req.params.userId,
    },
  }

  dynamoDb.get(params, (error, result) => {
    if (error) {
      console.log(error)
      res.status(400).json({ error: 'Could not get user' })
    }
    if (result.Item) {
      const { userId, name } = result.Item
      res.json({ userId, name })
    } else {
      res.status(404).json({ error: 'User not found' })
    }
  })
})

// Create User endpoint
app.post('/users', function (req, res) {
  const { userId, name } = req.body
  if (typeof userId !== 'string') {
    res.status(400).json({ error: '"userId" must be a string' })
  } else if (typeof name !== 'string') {
    res.status(400).json({ error: '"name" must be a string' })
  }

  const params = {
    TableName: USERS_TABLE,
    Item: {
      userId: userId,
      name: name,
    },
  }

  dynamoDb.put(params, (error) => {
    if (error) {
      console.log(error)
      res.status(400).json({ error: 'Could not create user' })
    }
    res.json({ userId, name })
  })
})

// Get User endpoint
app.get('/scores/:challenge', function (req, res) {
  const { challenge } = req.params
  // console.log('Table', SCORES_TABLE)
  const params = {
    TableName: SCORES_TABLE,
    FilterExpression: 'challenge = :challenge',
    ExpressionAttributeValues: {
      ':challenge': challenge,
    },
  }

  dynamoDb.scan(params, (error, result) => {
    if (error) {
      console.log(error)
      res.status(400).json({ error: `Could not get challenge ${challenge}` })
    }
    if (result.Items) {
      res.json(result.Items)
    } else {
      res.status(404).json({ error: `Challenge ${challenge} not found` })
    }
  })
})

// Post Score endpoint
app.post('/scores', function (req, res) {
  const { userId, score, challenge } = req.body
  if (typeof userId !== 'string') {
    res.status(400).json({ error: '"userId" must be a string' })
  } else if (typeof score !== 'number') {
    res.status(400).json({ error: '"score" must be a number' })
  } else if (typeof challenge !== 'string') {
    res.status(400).json({ error: '"challenge" must be a string' })
  }
  const timestamp = Date.now()
  const params = {
    TableName: SCORES_TABLE,
    Item: {
      userId: userId,
      score: score,
      challenge: challenge,
      timestamp: timestamp,
    },
  }

  dynamoDb.put(params, (error) => {
    if (error) {
      console.log(error)
      res.status(400).json({ error: 'Could not post new score' })
    }
    res.json({ userId, score, challenge, timestamp })
  })
})

module.exports.handler = serverless(app)
