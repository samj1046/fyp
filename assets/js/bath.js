

var players = [{
    "ign": "BLOL5",
    "name": "Gary",
    "game": "League Of Legends",
    "role": "Top",
    "rank": "Diamond 1"
  },
  {
    "ign": "BLOL4",
    "name": "Ani",
    "game": "League Of Legends",
    "role": "Jungle",
    "rank": "Challenger"
  },
  {
    "ign": "BLOL3",
    "name": "Sam",
    "game": "League Of Legends",
    "role": "Mid",
    "rank": "Diamond 4"
  },
  {
    "ign": "BLOL2",
    "name": "Aaron",
    "game": "League Of Legends",
    "role": "ADC",
    "rank": "Diamond 3"
  },
  {
    "ign": "BLOL1",
    "name": "Devon",
    "game": "League Of Legends",
    "role": "Support",
    "rank": "Master"
  },
  {
    "ign": "BDota1",
    "name": "Rasmus",
    "game": "Dota2",
    "role": "Carry",
    "rank": "Legend"
  },
  {
    "ign": "BDota2",
    "name": "John",
    "game": "Dota2",
    "role": "Off Lane",
    "rank": "Legend"
  },
  {
    "ign": "BDota3",
    "name": "Dave",
    "game": "Dota2",
    "role": "Mid",
    "rank": "Archon"
  },
  {
    "ign": "BDota4",
    "name": "Martin",
    "game": "Dota2",
    "role": "Roaming Support",
    "rank": "Divine"
  },
  {
    "ign": "BDota5",
    "name": "Mihael",
    "game": "Dota2",
    "role": "Hard Support",
    "rank": "Ancient"
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
