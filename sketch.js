let trafficincidentschart, rearend = [];
const lsuCoords = { latitude: 30.4133, longitude: -91.1800 };
const cityBounds = { minLat: 30.3290, maxLat: 30.5838, minLon: -91.2805, maxLon: -91.0025 };
const aspectRatio = (cityBounds.maxLon - cityBounds.minLon) / (cityBounds.maxLat - cityBounds.minLat);

function preload() {
  // trafficincidentschart = loadTable("crash.csv");
  trafficincidentschartJ = loadJSON("crash.json");

}

function setup() {
  print(trafficincidentschartJ)
  createCanvas(800, 800 / aspectRatio);
  // potholes = trafficincidentschart.findRows("MANNER OF COLLISION", "Front to rear - rear end");
  // potholesJ 
  // print(potholes)

}

function draw() {
  background(0);
  noStroke();

  fill(255, 255, 255, 100);

  for (let i = 0; i < trafficincidentschartJ.features.length; i++) {
    if(trafficincidentschartJ.features[i].properties.manner_of_collision == 'Front to rear - rear end') {
      let x = map(trafficincidentschartJ.features[i].geometry.coordinates[0], cityBounds.minLon, cityBounds.maxLon, 0, width);
      let y = map(trafficincidentschartJ.features[i].geometry.coordinates[1], cityBounds.minLat, cityBounds.maxLat, height, 0);
      fill(0, 0, 255, 100)
      circle(x, y, 5);
    }

    if(trafficincidentschartJ.features[i].properties.manner_of_collision == 'Angle - perpendicular/other angle') {
      let x = map(trafficincidentschartJ.features[i].geometry.coordinates[0], cityBounds.minLon, cityBounds.maxLon, 0, width);
      let y = map(trafficincidentschartJ.features[i].geometry.coordinates[1], cityBounds.minLat, cityBounds.maxLat, height, 0);
      fill(255, 0, 0, 100)
      circle(x, y, 5);
    }

    if(trafficincidentschartJ.features[i].properties.manner_of_collision == 'Sideswipe - same direction') {
      let x = map(trafficincidentschartJ.features[i].geometry.coordinates[0], cityBounds.minLon, cityBounds.maxLon, 0, width);
      let y = map(trafficincidentschartJ.features[i].geometry.coordinates[1], cityBounds.minLat, cityBounds.maxLat, height, 0);
      fill(0, 255, 0, 100)
      circle(x, y, 5);
    }

    

   

    
    // [1].properties.manner_of_collision

    // let x = map(potholes[i].obj.longitude, cityBounds.minLon, cityBounds.maxLon, 0, width);
    // let y = map(potholes[i].obj.latitude, cityBounds.minLat, cityBounds.maxLat, height, 0);
    // print(x,y)
    
  }
}
