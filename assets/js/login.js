var users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: 'user3', password: 'pass3' }
];

var button = document.getElementById('login');

button.onclick = function() {
   var username = document.getElementById('username').value;
   var password = document.getElementById('password').value;

   for (var i = 0; i < users.length; i++) {
      if(username == users[i].username && password == users[i].password) {
         window.location.href = 'https://www.twitch.tv/';
         break;
      }else{
         alert('You are trying to break in!');
      }
   }
}
