# Backend_Unit4
# How To Api

API address: https://joses-how-to-api.herokuapp.com/
A place to post different things of the How to kind.

## Routes

### POST

#### api/auth/register 
—Registers a user. Takes in an object: {username: data, password: data, email: data} Returns an object with Username, email, password, and date joined.

#### api/auth/login 
—Logs in a user. Takes in an object: {username: data, password: data} Returns an object with a message and a token.

#### api/posts
—Makes a user post. Takes in an object: {title: data, contents: data, user_id} Returns an object with an id.

### GET

##### api/auth/users
—List of users. Returns an array of objects with Username, email, and date joined.

#### api/auth/posts
—List of posts. Returns an array of objects with title, contents, user_id, created.