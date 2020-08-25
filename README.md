# Kettle
This application is a social media platform inspired by Twitter. The idea is that users can come here to share their ideas. Each user can view the posts of other users in the homepage feed or on their wall.

## Important Links
- [API Repo](#)
- [Deployed API](#)
- [Deployed Client](#)
### Planning Story
...

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
...

## ERD
[ERD](#)

## API

Use this as the basis for your own API documentation. Add a new third-level
heading for your custom entities, and follow the pattern provided for the
built-in user authentication documentation.

Scripts are included in [`curl-scripts`](curl-scripts) to test built-in actions.
Add your own scripts to test your custom API.

### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |

### Posts

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET    | `/`             | `users#signup`    |
| POST   | `/post`             | `users#signin`    |
| PATCH  | `/post/:id` | `users#changepw`  |
| DELETE | `/post/:id`        | `users#signout`   |
