# Groups

In general you are supposed to create the Frontend to a social
network. You can decide on a theme if you want.

## Important

At least one of you should be programming each day,
switch the role daily.

Document your progress (at least) in Kanban Form (Trello or
README.md in your project)

## Group 1
Micha
Madhu

## Group 2
Glen
Juanca

## Group 3
Danylo
Daniel

## Group 4
Nisha
Sami

## Undecided
Anton

## Backend Functions

Endpoint: https://fbw14social.hktr.de/{URI}

### Register
  - Method: POST
  - URI: /auth/register
  - Params: { email, password }
  - Result: { status:'ok'|'fail' }

### Login
  - Method: POST
  - URI: /auth/login
  - Params: { email, password }
  - Result: {
        status:'ok'|'fail',
        token:'123123asd12',
        profile:Profile
    }

### Logout
  - Method: POST
  - URI: /auth/logout
  - Params: {}
  - Result: { status:'ok' }

### Unregister
  - Method: POST
  - URI: /auth/register
  - Params: { email, password }
  - Result: { status:'ok'|'fail' }


### Profile
  - Method: GET
  - URI: /profile
  - Result: { status:'ok'|'fail', profile:Profile }

### EditProfile
  - Method: PUT
  - URI: /profile
  - Params: {...} Altered fields
  - Result: { status:'ok'|'fail', profile:Profile }

### ViewProfile (another user)
  - Method: GET
  - URI: /profile/:userId
  - Result: { status:'ok'|'fail', profile:Profile }

### SearchUser

Search a user by Name, Location, Age, etc.

  - Method: POST
  - URI: /search/user
  - Params: {...} search fields
  - Result: { status:'ok'|'fail', profiles:[Profile] }

### ListFriends
  - Method: GET
  - URI: /friends
  - Result: { status:'ok'|'fail', profiles:[Profile] }

### ListFriendRequests
  - Method: GET
  - URI: /friends/pending
  - Result: { status:'ok'|'fail', profiles:[Profile] }

### AddFriend
  - Method: POST
  - URI: /friends/approve
  - Params: {userId}
  - Result: { status:'ok'|'fail' }

### UnFriend
  - Method: POST
  - URI: /friends/reject
  - Params: {userId}
  - Result: { status:'ok'|'fail' }

### SendMessage
  - Method: POST
  - URI: /message
  - Params: {userId,message}
  - Result: { status:'ok'|'fail', history:[Message] }

### ChatHistory
  - Method: GET
  - URI: /message/history/:userId
  - Result: { status:'ok'|'fail', history:[Message] }

AddPost
EditPost
DeletePost
LikePost
HatePost

CreateGroup
DeleteGroup
JoinGroup
InviteGroup
GroupPost
GroupView