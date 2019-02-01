# Discode

[Live Demo](http://discode-aa.herokuapp.com "Live Demo")

Discode is a full stack live chatting application designed to resemble Discord, the most popular live voice chatting client for gamers. Discode uses Ruby on Rails and PostgreSQL for it's backend API and React and Redux for its frontend. It was created in a span of 10 days.

## Features
- User Authentication
	- User Login/Register
	- Demo User
- Create/Join Servers
- Create Channels
- Message people inside a Channel in real time
- Direct Message people

## Technologies Used
- **Ruby on Rails** to implement the backend framework
- **PostgreSQL** for the database
- **React** for the Frontend using **Redux** as the state manager
- **jQuery** AJAX to access backend through **Thunk** actions
- **SASS/CSS** for styling

## Implementation

### Inviting other Users to a Server
The invite modal pops up containing a URL path that the inviter can copy and paste to the invitee. 

![Screenshot](https://github.com/stephenchung27/discode/blob/master/app/assets/images/Screen%20Shot%202019-02-01%20at%2011.45.23%20AM.png?raw=true)

The invitee can either choose to click on the link and go to the path whereby joining the server automatically. Or they can copy and paste either the entire link or just the last 5 letters of the invite to the join server modal.

![Screenshot](https://github.com/stephenchung27/discode/blob/master/app/assets/images/Screen%20Shot%202019-02-01%20at%2011.45.46%20AM.png?raw=true)
![Screenshot](https://github.com/stephenchung27/discode/blob/master/app/assets/images/Screen%20Shot%202019-02-01%20at%2011.46.04%20AM.png?raw=true)

### Live Chatting: ActionCable
ActionCable is an implementation of WebSockets that seemlessly integrates with Rails applications. It allows each User to establish a connection and "speak" with a server where the message is then "broadcasted" to the other users in real time. 

```javascript
App.cable.subscriptions.create(
  { channel: "ChattingChannel" },
  {
    received: data => {
      if (!users[data.author_id]) {
        fetchUser(data.author_id);
      }
      receiveChannelMessage({
        id: data.id,
        body: data.body,
        author_id: data.author_id,
        created_at: data.created_at
      });
    },
    speak: function(data) {
      return this.perform("speak", data);
    }
  }
);
```
The backend takes care of querying the database with a new chat message. Thus `receiveChannelMessage`, a frontend redux action, is dispatched so the client-side state is updated as well.

### Parsing Links from Messages:  Regex
When a User sends a message with a URL, it must be clickable when it is rendered. Thus a Regex expresssion must be used to parse through the message and make the necessary replacements in the code.
```javascript
const parseMessage = (message, index) => {
  const links = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/;

  const youtube = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;

  const youtubeRegex = youtube.exec(message.body);

  return (
    <li key={index}>
      {reactStringReplace(message.body, links,
        (match, index) => (
          <a key={index} href={match} className='links'>{match}</a>
        )
      )}
      {youtubeRegex ? <VideoEmbed videoId={youtubeRegex[1]} /> : null}
    </li>
  )
};
```
Calling `Regex.exec(str)` on a Regex expression returns an array of values including the original string and the captured group. If there are no matches, the function returns null which allows us to use a ternary operator to selectively render our `VideoEmbed` component if a Youtube URL is passed in the message.

![Screenshot](https://github.com/stephenchung27/discode/blob/master/app/assets/images/Screen%20Shot%202019-02-01%20at%2011.46.23%20AM.png?raw=true)

## Planned Future Features
- Real time voice chat using WebRTC
- Online/offline status using WebSockets
- Search functionality for sending Direct Messages
- Ability to upload images for User avatars
