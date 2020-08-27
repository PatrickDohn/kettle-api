const express = require('express')
const passport = require('passport')

const Post = require('../models/posts')
// methods for error handling
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET all posts for the homepage
router.get('/posts', requireToken, (req, res, next) => {
  Post.find()
    .then(posts => {
      return posts.map(post => post.toObject())
    })
    // respond with status 200 and JSON of the examples
    .then(posts => res.status(200).json({ posts: posts }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// INDEX
// GET all posts for the homepage
router.get('/profile', requireToken, (req, res, next) => {
  Post.find({ owner: req.user.id })
    .then(posts => {
      return posts.map(post => post.toObject())
    })
    // respond with status 200 and JSON of the examples
    .then(posts => res.status(200).json({ posts: posts }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// SHOW all posts for one user
router.get('/profile/:id', requireToken, (req, res, next) => {
  // req.params.id will be set based on the `:id` in the route
  Post.find({ owner: req.params.id })
    .then(handle404)
    // if `findById` is succesful, respond with 200 and "example" JSON
    .then(posts => {
      return posts.map(post => post.toObject())
    })
    // respond with status 200 and JSON of the examples
    .then(posts => res.status(200).json({ posts: posts }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// CREATE
// POST /examples
router.post('/new-post', requireToken, (req, res, next) => {
  // set owner of new example to be current user
  req.body.post.owner = req.user.id

  Post.create(req.body.post)
    .then(post => {
      res.status(201).json({ post: post.toObject() })
    })
    .catch(next)
})

// UPDATE
// PATCH /examples/5a7db6c74d55bc51bdf39793
router.patch('/posts/:id', requireToken, removeBlanks, (req, res, next) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  delete req.body.post.owner

  Post.findById(req.params.id)
    .then(handle404)
    .then(post => {
      requireOwnership(req, post)

      return post.updateOne(req.body.post)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DELETE
router.delete('/posts/:id', requireToken, (req, res, next) => {
  Post.findById(req.params.id)
    .then(handle404)
    .then(post => {
      requireOwnership(req, post)
      post.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
