

var players = [{
    "ign": "Spirit",
    "name": "Tom",
    "game": "League Of Legends",
    "role": "Top",
    "rank": "Diamond 2"
  },
  {
    "ign": "Hope",
    "name": "Manuel",
    "game": "League Of Legends",
    "role": "Jungle",
    "rank": "Masters"
  },
  {
    "ign": "Samj1046",
    "name": "Sam",
    "game": "League Of Legends",
    "role": "Mid",
    "rank": "Masters"
  },
  {
    "ign": "SoXu",
    "name": "Maks",
    "game": "League Of Legends",
    "role": "ADC",
    "rank": "Masters"
  },
  {
    "ign": "Didol",
    "name": "Dominik",
    "game": "League Of Legends",
    "role": "Support",
    "rank": "Grand Master"
  },
  {
    "ign": "Dota1",
    "name": "John",
    "game": "Dota2",
    "role": "Carry",
    "rank": "Legend"
  },
  {
    "ign": "Dota2",
    "name": "John",
    "game": "Dota2",
    "role": "Off Lane",
    "rank": "Legend"
  },
  {
    "ign": "Dota3",
    "name": "Dave",
    "game": "Dota2",
    "role": "Mid",
    "rank": "Archon"
  },
  {
    "ign": "Dota4",
    "name": "Martin",
    "game": "Dota2",
    "role": "Roaming Support",
    "rank": "Divine"
  },
  {
    "ign": "Dota5",
    "name": "Mihael",
    "game": "Dota2",
    "role": "Hard Support",
    "rank": "Ancient"
  },
  {
    "ign": "CS1",
    "name": "Kim",
    "game": "Csgo",
    "role": "AWP",
    "rank": "LEM"
  },
  {
    "ign": "CS2",
    "name": "Moon",
    "game": "Csgo",
    "role": "Entry",
    "rank": "Global"
  },
  {
    "ign": "CS3",
    "name": "Lee",
    "game": "Csgo",
    "role": "IGL",
    "rank": "LEM"
  },
  {
    "ign": "CS4",
    "name": "Park",
    "game": "Csgo",
    "role": "Entry",
    "rank": "Supreme"
  },
  {
    "ign": "CS5",
    "name": "Ryu",
    "game": "Csgo",
    "role": "Support",
    "rank": "Global"
  },
  {
    "ign": "RL1",
    "name": "Joe",
    "game": "Rocket League",
    "role": "Forward",
    "rank": "Champion 1"
  },
  {
    "ign": "RL1",
    "name": "Tom",
    "game": "Rocket League",
    "role": "Mid",
    "rank": "Grand Champion"
  },
  {
    "ign": "RL1",
    "name": "Gary",
    "game": "Rocket League",
    "role": "Back",
    "rank": "Diamond 1"
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
