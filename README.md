# Kettle
This application is a social media platform inspired by Twitter. The idea is that users can come here to share their ideas. Each user can view the posts of other users in the homepage feed or on their wall.

## Important Links
- [Client Repo](https://github.com/C2C-NeedABr/kettle-client)
- [Deployed API](https://fathomless-castle-00355.herokuapp.com/)
- [Deployed Client](c2c-needabr.github.io/kettle-client/)
### Planning Story
We decided to keep the first version of the application fairly simple with only a user and post resource. Building out the API itself wasn't so difficult, but naming the paths proved a bit tricky the more specific we got.

### User Stories
- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to add a post to my wall.
- As a signed in user, I would like to update a post on my wall.
- As a signed in user, I would like to delete a post on my wall.
- As a signed in user, I would like to see all my posts.
- As a signed in user, I would like to view a list of other users and view their walls.

## Technologies Used
- React
- React Hooks
- Axios
- Express
- MongoDB

### Unsolved Problems
1. In V2 we would like to add more resources such as comments for each post to give users an authentic social networking experience.

## ERD
[ERD](https://imgur.com/a/m5zKjeN)

## Wireframe
[Wireframe](https://imgur.com/BJKU7sP)

## API

All routes except `/sign-in` and `/sign-up` require Authentication headers in the requests.

### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |

### Posts

| Verb   | URI Pattern            | Description |
|--------|------------------------|-------------------|
| GET    | `/users`             | `Get a list of all registered users`    |
| GET    | `/posts`               | `Retrieve all posts`  |
| POST   | `/new-post`             | `Send a new post`    |
| PATCH  | `/posts/:id` | `Edit your own post`  |
| DELETE | `/posts/:id`        | `Delete your own post`   |
