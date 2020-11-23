# Groups

In general you are supposed to create the Frontend to a social
network. You can decide on a theme if you want.

## Important

At least one of you should be programming each day,
switch the role daily.

Document your progress (at least) in Kanban Form (Trello or
README.md in your project)

## Group 1 - Chitter-Chatter
**Members:** Micha, Madhu
**Slug:** chitter
[Trello](https://trello.com/b/aAmDz3Wg/chitter-chatter-app)
[Git](https://github.com/DCI-Dusseldorf/chitter-chatter)
[Frontend](https://sz.hktr.de/chitter/)

## Group 2 - Glued
**Slug:** glued
**Members:** Glen, Juanca
[Trello](https://trello.com/b/0YPXf71t/social-media-react)
[Git](https://github.com/glennludszuweit/social-media-REACT)
[Frontend](https://sz.hktr.de/glued/)

## Group 3 - DoubleD
**Members:** Danylo, Daniel
**Slug:** doubled
[Trello](https://trello.com/b/G8Jo5AUy)
[Frontend](https://sz.hktr.de/doubled/)

## Group 4 - NiSa
**Members:** Nisha, Sami
**Slug:** nisa
[Trello](https://trello.com/b/VHWA0xcj/react-social-media)
[Git](https://github.com/DCI-Dusseldorf/NiSa-React-SocialMedia)
[Frontend](https://sz.hktr.de/nisa/)

## Undecided
Anton

## Backend Functions

  - Sources: [github](https://github.com/DCI-Dusseldorf/Fbw14-The-Social-Backend)
  - Endpoint: https://sz.hktr.de/api/{URI}

#### Using the Backend on localhost:3000

Inside your package.json add:

```JSON
{
  ...
  "proxy": "https://sz.hktr.de",
  ...
}
```

#### Using the Backend and deploy

Inside your package.json add:

```JSON
{
  ...
  "homepage": "https://sz.hktr.de/{GROUP}",
  "scripts":{
    "predeploy": "npm run build",
    "deploy": "cd build && scp -r * {GROUP}@sz.hktr.de:",
    ...
  },
  ...
}
```

Inside index.js (or wherever you call BrowserRouter) add the basname prop
to the BrowserRouter component, eg.:

```JSX
<BrowserRouter basename="/{GROUP}">
  <App/>
</BrowserRouter>
```

Replace **{GROUP}** with your corresponding group name (nisa|doubled|chitter|glued).

### Authentication (mandatory)

#### Register
  - Method: POST
  - URI: /auth/register
  - Params: { email, password, name }
  - Result: { tokens:{ access, refresh }, user:User }

#### Login
  - Method: POST
  - URI: /auth/login
  - Params: { email, password }
  - Result: { tokens:{ access, refresh }, user:User }

#### Logout
  - Method: POST
  - URI: /auth/logout
  - Params: { refresh }
  - Result: 204

#### Unregister
  - Method: POST
  - URI: /auth/register
  - Params: { email, password }
  - Result: 204

### Profiles (mandatory)

#### Profile
  - Method: GET
  - URI: /profile
  - Result: { status:'ok'|'fail', profile:Profile }

#### EditProfile
  - Method: PUT
  - URI: /profile
  - Params: {...} Altered fields
  - Result: { status:'ok'|'fail', profile:Profile }

#### ViewProfile (another user)
  - Method: GET
  - URI: /profile/:userId
  - Result: { status:'ok'|'fail', profile:Profile }

### Search (mandatory)

#### SearchUser

Search a user by Name, Location, Age, etc.
Model can be User, Post, Group...

  - Method: POST
  - URI: /search/
  - Params: { type:"Model", field:String, value:Dynamic|match:String }
  - Result: [ Model ]

### Friendships (mandatory)

#### ListFriends
  - Method: GET
  - URI: /friends
  - Result: { status:'ok'|'fail', profiles:[Profile] }

#### ListFriendRequests
  - Method: GET
  - URI: /friends/pending
  - Result: { status:'ok'|'fail', profiles:[Profile] }

#### AddFriend
  - Method: POST
  - URI: /friends/approve
  - Params: {userId}
  - Result: { status:'ok'|'fail' }

#### UnFriend
  - Method: POST
  - URI: /friends/reject
  - Params: {userId}
  - Result: { status:'ok'|'fail' }

### Communication (mandatory)

#### SendMessage
  - Method: POST
  - URI: /message
  - Params: {userId,message}
  - Result: { status:'ok'|'fail', history:[Message] }

#### ChatHistory
  - Method: GET
  - URI: /message/history/:userId
  - Result: { status:'ok'|'fail', history:[Message] }

### Profile / Group Posts (optional)

#### AddPost
  - Method: POST
  - URI: /post/
  - Params: { message }
  - Result: { post:Post }

#### Comment (Sub-Post)
  - Method: POST
  - URI: /post/:postId
  - Params: { message }
  - Result: { post:Post }

#### EditPost
  - Method: PATCH
  - URI: /post/:postId
  - Params: { message }
  - Result: { post:Post }

#### DeletePost
  - Method: DELETE
  - URI: /post/:postId
  - Result: 204

#### Add Reaction
  - Method: PUT
  - URI: /like/:model/:id/:reaction
  - Result: 204

### Groups (optional)

#### CreateGroup
  - Method: POST
  - URI: /group/
  - Params: Group
  - Result: { group:Group }

#### DeleteGroup
  - Method: DELETE
  - URI: /group/:groupId
  - Result: 204

#### JoinGroup
  - Method: POST
  - URI: /group/:groupId/join
  - Params: {}
  - Result: 204

#### InviteGroup
  - Method: POST
  - URI: /group/:groupId/invite
  - Params: { userId }
  - Result: 204

#### GroupPost
  - Method: POST
  - URI: /group/:groupId/post
  - Params: { groupId, message:Message }
  - Result: { status:'ok'|'fail' }

#### GroupView
  - Method: GET
  - URI: /group/:groupId
  - Result: Group

#### Group Post (Sub-Post)
  - Method: POST
  - URI: /post/:postId
  - Params: { message }
  - Result: { post:Post }
