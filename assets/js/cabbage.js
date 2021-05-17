

var players = [{
    "ign": "Alphamoss",
    "name": "Louis",
    "game": "League Of Legends",
    "role": "Top",
    "rank": "Diamond 2"
  },
  {
    "ign": "Pawp",
    "name": "George",
    "game": "League Of Legends",
    "role": "Jungle",
    "rank": "Master"
  },
  {
    "ign": "QQR",
    "name": "Sean",
    "game": "League Of Legends",
    "role": "Mid",
    "rank": "Grand Master"
  },
  {
    "ign": "Greggers",
    "name": "Aaron",
    "game": "League Of Legends",
    "role": "ADC",
    "rank": "Master"
  },
  {
    "ign": "Mostly Grumpy",
    "name": "Simon",
    "game": "League Of Legends",
    "role": "Support",
    "rank": "Diamond 3"
  },
  {
    "ign": "CDota1",
    "name": "Rasmus",
    "game": "Dota2",
    "role": "Carry",
    "rank": "Legend"
  },
  {
    "ign": "CDota2",
    "name": "John",
    "game": "Dota2",
    "role": "Off Lane",
    "rank": "Legend"
  },
  {
    "ign": "CDota3",
    "name": "Dave",
    "game": "Dota2",
    "role": "Mid",
    "rank": "Archon"
  },
  {
    "ign": "CDota4",
    "name": "Martin",
    "game": "Dota2",
    "role": "Roaming Support",
    "rank": "Divine"
  },
  {
    "ign": "CDota5",
    "name": "Mihael",
    "game": "Dota2",
    "role": "Hard Support",
    "rank": "Ancient"
  },
  {
    "ign": "CR1",
    "name": "George",
    "game": "Clash Royale",
    "role": "N/A",
    "rank": "Arena 11"
  },

]

var render = function(data) {
  var app = document.getElementById('app');
  var playersHTMLString = '<ul>' +
    data.map(function(player) {
      return '<li>' +

        '<strong>IGN: </strong>' + player.ign + '<br/>' +
        '<strong>Name: </strong>' + player.name + '<br/>' +
        '<strong>Game: </strong>' + player.game + '<br/>' +
        '<strong>Role: </strong>' + player.role + '<br/>' +
        '<strong>Rank: </strong>' + player.rank + '<br/>' +
        '</li>';
    }).join(''); +
  '</ul>';

  app.innerHTML = playersHTMLString;
}
render(players);

var handleSearch = function(event) {
  event.preventDefault();

  var searchTerm = event.target.elements['search'].value;

  var tokens = searchTerm
    .toLowerCase()
    .split(' ')
    .filter(function(token) {
      return token.trim() !== '';
    });
  if (tokens.length) {

    var searchTermRegex = new RegExp(tokens.join('|'), 'gim');
    var filteredList = players.filter(function(player) {

      var playerString = '';
      for (var key in player) {
        if (player.hasOwnProperty(key) && player[key] !== '') {
          playerString += player[key].toString().toLowerCase().trim() + ' ';
        }
      }

      return playerString.match(searchTermRegex);
    });

    render(filteredList);
  }
};

document.addEventListener('submit', handleSearch);


document.getElementById("search_btn").click();
