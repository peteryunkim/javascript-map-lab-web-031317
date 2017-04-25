const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

var sortedRobots = robots.map(function(e){
    var alliance = {}
    if (knownDecepticons.includes(e.name)) {
      alliance = {alliance: "decepticon"}
    } else {
      alliance = {alliance: "autobot"}
    }
  return Object.assign({}, e, alliance)
  })


const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

var coloredZebraStripes = zebraStripes.map(function(a,index,array) {
  var c = {}
      if (index %2===0) {
        c = {color: "black"}
      } else {
        c = {color: "white"}
      }
    return Object.assign({}, a, c)
  })
