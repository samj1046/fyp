

var players = [{
    "ign": "LLOL1",
    "name": "Tom",
    "game": "League Of Legends",
    "role": "Top",
    "rank": "Diamond 2"
  },
  {
    "ign": "LLOL2",
    "name": "Manuel",
    "game": "League Of Legends",
    "role": "Jungle",
    "rank": "Masters"
  },
  {
    "ign": "LLOL3",
    "name": "Sam",
    "game": "League Of Legends",
    "role": "Mid",
    "rank": "Masters"
  },
  {
    "ign": "LLOL4",
    "name": "Maks",
    "game": "League Of Legends",
    "role": "ADC",
    "rank": "Masters"
  },
  {
    "ign": "LLOL5",
    "name": "Dominik",
    "game": "League Of Legends",
    "role": "Support",
    "rank": "Grand Master"
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
