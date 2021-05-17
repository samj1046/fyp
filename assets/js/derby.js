

var players = [{
    "ign": "DLOL5",
    "name": "Gary",
    "game": "League Of Legends",
    "role": "Top",
    "rank": "Diamond 1"
  },
  {
    "ign": "DLOL4",
    "name": "Ani",
    "game": "League Of Legends",
    "role": "Jungle",
    "rank": "Challenger"
  },
  {
    "ign": "DLOL3",
    "name": "Sam",
    "game": "League Of Legends",
    "role": "Mid",
    "rank": "Diamond 4"
  },
  {
    "ign": "DLOL2",
    "name": "Aaron",
    "game": "League Of Legends",
    "role": "ADC",
    "rank": "Diamond 3"
  },
  {
    "ign": "DLOL1",
    "name": "Devon",
    "game": "League Of Legends",
    "role": "Support",
    "rank": "Master"
  },
  {
    "ign": "DCS1",
    "name": "Kim",
    "game": "Csgo",
    "role": "AWP",
    "rank": "LEM"
  },
  {
    "ign": "DCS2",
    "name": "Moon",
    "game": "Csgo",
    "role": "Entry",
    "rank": "Global"
  },
  {
    "ign": "DCS3",
    "name": "Lee",
    "game": "Csgo",
    "role": "IGL",
    "rank": "LEM"
  },
  {
    "ign": "DCS4",
    "name": "Park",
    "game": "Csgo",
    "role": "Entry",
    "rank": "Supreme"
  },
  {
    "ign": "DCS5",
    "name": "Ryu",
    "game": "Csgo",
    "role": "Support",
    "rank": "Global"
  },
  {
    "ign": "DV5",
    "name": "Ani",
    "game": "Valorant",
    "role": "Jett",
    "rank": "Radiant"
  },
  {
    "ign": "DV4",
    "name": "Sam",
    "game": "Valorant",
    "role": "Omen",
    "rank": "Diamond 3"
  },
  {
    "ign": "DV3",
    "name": "Lee",
    "game": "Valorant",
    "role": "Sage",
    "rank": "Diamond 2"
  },
  {
    "ign": "DV2",
    "name": "Ryu",
    "game": "Valorant",
    "role": "Brimstone",
    "rank": "Platinum 3"
  },
  {
    "ign": "DV1",
    "name": "Ryu",
    "game": "Valorant",
    "role": "Pheonix",
    "rank": "Radiant"
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
