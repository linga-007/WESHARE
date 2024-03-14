import React, { useEffect, useState } from 'react'; // Added useState

function GooglemapApi(props) {
  const [mapInitialized, setMapInitialized] = useState(false); // Added state to track map initialization

  useEffect(() => {
    if (!mapInitialized) { // Check if map is not already initialized
      const platform = new window.H.service.Platform({
        'apikey': 'ZvMWyrsuWLdeiE3JPENy-hpUihjQf2A5S2x3GXTPqA0'
      });

      const defaultLayers = platform.createDefaultLayers();
      const map = new window.H.Map(
        document.getElementById("map"),
        defaultLayers.vector.normal.map,
        {
          center: { lat: 10.4957163, lng: 77.0364381 },
          zoom: 1,
          pixelRatio: window.devicePixelRatio || 1,
        }
      );

      window.addEventListener("resize", () => map.getViewPort().resize());
      const behavior = new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(map));
      const ui = window.H.ui.UI.createDefault(map, defaultLayers);

      // Marker Icon from ambulance
      const icon = new window.H.map.Icon('Website/static/ambulance.png');

      // Create the parameters for the routing request:
      const routingParameters = {
        'routingMode': 'fast',
        'transportMode': 'car',
        'origin': `${props.startlat},${props.startlng}`,
        'destination': `${props.endlat},${props.endlng}`,
        'return': 'polyline'
      };

      const onResult = function(result) {
        if (result.routes.length) {
          result.routes[0].sections.forEach((section) => {
            let linestring = window.H.geo.LineString.fromFlexiblePolyline(section.polyline);
            let routeLine = new window.H.map.Polyline(linestring, {
              style: { strokeColor: 'blue', lineWidth: 3 }
            });
            let startMarker = new window.H.map.Marker(section.departure.place.location);
            let endMarker = new window.H.map.Marker(section.arrival.place.location);
            map.addObjects([routeLine, startMarker, endMarker]);
            map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
          });
        }
      };

      const router = platform.getRoutingService(null, 8);

      router.calculateRoute(routingParameters, onResult,
        function(error) {
          alert(error.message);
        });

      setMapInitialized(true); // Set map initialization state to true
    }

    return () => {
      // Cleanup code if needed
    };

  }, [mapInitialized]); // Depend on mapInitialized state

  const autosuggest = (e) => {
    let searchString = e.value
    if (searchString !== "") {
      fetch(`https://autosuggest.search.hereapi.com/v1/autosuggest?apiKey=${"ZvMWyrsuWLdeiE3JPENy-hpUihjQf2A5S2x3GXTPqA0"}&at=33.738045,73.084488&limit=500&resultType=city&q=${searchString}&lang=en-US`)
      .then(res => res.json())
      .then((json) => {
        if (json.length !== 0) {
          document.getElementById("list").innerHTML = ``;
          let dropData = json.items.map((item) => {
            if ((item.position !== undefined) & (item.position !== "")) {
              // Corrected syntax here
              document.getElementById("list").innerHTML += `<li onClick="addMarkerToMap(${item.position.lat},${item.position.lng})">${item.title}</li>`;
            }
          });
        }
      });
    }
  };

  return (
    <div id="map" className='w-full h-full border rounded-lg border-black gap-16 position-absolute'></div>
  );
}

export default GooglemapApi;
