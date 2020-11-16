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

## Group 3
**Members:** Danylo, Daniel
**Slug:** doubled
[Trello](https://trello.com/b/G8Jo5AUy)
[Frontend](https://sz.hktr.de/doubled/)

## Group 4
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

Replace {GROUP} with your corresponding group name (nisa|doubled|chitter|glued).

### Authentication (mandatory)

#### Register
  - Method: POST
  - URI: /auth/register
  - Params: { email, password, name }
  - Result: { status:'ok'|'fail' }

#### Login
  - Method: POST
  - URI: /auth/login
  - Params: { email, password }
  - Result: {
        status:'ok'|'fail',
        token:'123123asd12',
        profile:Profile
    }

#### Logout
  - Method: POST
  - URI: /auth/logout
  - Params: {}
  - Result: { status:'ok' }

#### Unregister
  - Method: POST
  - URI: /auth/register
  - Params: { email, password }
  - Result: { status:'ok'|'fail' }

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

  - Method: POST
  - URI: /search/user
  - Params: {...} search fields
  - Result: { status:'ok'|'fail', profiles:[Profile] }

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
  - URI: /post
  - Params: { userId|groupId, message }
  - Result: { status:'ok'|'fail', post:Post }

#### EditPost
  - Method: POST
  - URI: /post/edit
  - Params: { postId, message }
  - Result: { status:'ok'|'fail', post:Post }

#### DeletePost
  - Method: POST
  - URI: /post/delete
  - Params: { postId }
  - Result: { status:'ok'|'fail' }

#### PostReact
  - Method: POST
  - URI: /post/like
  - Params: { postId, reaction }
  - Result: { status:'ok'|'fail' }

#### CommentPost
  - Method: POST
  - URI: /post/comment
  - Params: { postId, message }
  - Result: { status:'ok'|'fail', post:Post }

#### CommentPostEdit
  - Method: POST
  - URI: /post/comment/edit
  - Params: { messageId }
  - Result: { status:'ok'|'fail', post:Post }

#### CommentPostDelete
  - Method: POST
  - URI: /post/comment/delete
  - Params: { messageId }
  - Result: { status:'ok'|'fail', post:Post }

#### CommentPostReact
  - Method: POST
  - URI: /post/comment/react
  - Params: { messageId, reaction:String }
  - Result: { status:'ok'|'fail', post:Post }

### Groups (optional)

#### CreateGroup
  - Method: POST
  - URI: /group
  - Params: Group
  - Result: { status:'ok'|'fail', group:Group }

#### DeleteGroup
  - Method: POST
  - URI: /group/delete
  - Params: { groupId }
  - Result: { status:'ok'|'fail' }

#### JoinGroup
  - Method: POST
  - URI: /group/join
  - Params: { groupId }
  - Result: { status:'ok'|'fail' }

#### InviteGroup
  - Method: POST
  - URI: /group/invite
  - Params: { userId, groupId }
  - Result: { status:'ok'|'fail' }

#### GroupPost
  - Method: POST
  - URI: /group/post
  - Params: { groupId, message:Message }
  - Result: { status:'ok'|'fail' }

#### GroupView
  - Method: GET
  - URI: /group/:groupId
  - Result: { status:'ok'|'fail', group:Group }
