var map,
	uk = {
		lat: 51.5224821,
		lng: -0.1389824
	},
	mexico = {
		lat: 19.4306812,
		lng: -99.2007428
	},
  mexicoText = "<b>Mexico City</b><br /><span>Goldsmith 40</span><span> Polanco 11550 </span>", 
  ukText = "<b>London</b><br /><span> 33 Fitzroy Street</span><span> W1T 6DU </span>";
function CenterControl(controlDiv, map, text, country) {
	// Set CSS for the control border.
    var controlUI = document.createElement('div');
    // controlUI.addClass('control');
    controlUI.style.backgroundColor = 'rgba(218,255,1,0)';
    controlUI.style.border = '2px solid rgba(218,255,1,0)';
    controlUI.style.borderRadius = '3px';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginTop = '0';
    controlUI.style.marginRight = '0';
    controlUI.style.marginBottom = '0';
    controlUI.style.textAlign = 'right';
    controlUI.style.width = '200px';
    controlUI.style.height = '100%';
    // controlUI.style.width = '100px';
    controlUI.title = 'Map';
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    var controlText = document.createElement('div');
    controlText.style.color = 'rgb(25,25,25)';
    controlText.style.paddingLeft = '10px';
    controlText.style.paddingRight = '10px';
    controlText.style.paddingTop = '10px';
    controlText.style.paddingBottom = '10px';
    controlUI.style.Width = '190';
    controlText.innerHTML = text;
    controlUI.appendChild(controlText);
    controlUI.addEventListener('click', function() {
   	 map.setCenter(country);
  	});
}
function initMaps(controlDiv) {
  var image = {
      url: "../images/marker.svg",
      scaledSize: new google.maps.Size(32, 32),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(16, 32)
    }
  var styles= [
    {
      featureType: "all",
      stylers: [
        { hue: "#daff01" },
        { saturation: -95 },
        { lightness: 30 }
      ]
    },
    {
      featureType: "poi",
      elementType: "label",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];
  var styledMap = new google.maps.StyledMapType(styles,
      {name: "Styled Map"});

  mapMx = new google.maps.Map(document.getElementById('mapmx'), {
    center: mexico,
    zoom: 16,
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER
    },
    disableDefaultUI: true
  });
  mapUk = new google.maps.Map(document.getElementById('mapuk'), {
    center: uk,
    zoom: 16,
    disableDefaultUI: true,
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER
    }
  });
  var marker = new google.maps.Marker({
     position: mexico,
     animation: google.maps.Animation.DROP,
     icon: image,
     map: mapMx
   });
  var marker = new google.maps.Marker({
     position: uk,
     animation: google.maps.Animation.DROP,
     icon: image,
     map: mapUk
   });
  mapUk.mapTypes.set('map_style', styledMap);
  mapMx.mapTypes.set('map_style', styledMap);
  mapUk.setMapTypeId('map_style');
  mapMx.setMapTypeId('map_style');

  var centerControlDivMx = document.createElement('div');
  var centerControlDivUk = document.createElement('div');
  centerControlDivMx.style.height = '100%';
  centerControlDivUk.style.height = '100%';
  centerControlDivMx.className="control";
  centerControlDivUk.className="control";

  var centerControlMx = new CenterControl(centerControlDivMx, mapMx, mexicoText, mexico);
  var centerControlUk = new CenterControl(centerControlDivUk, mapUk, ukText, uk);

  centerControlDivMx.index = 1;
  centerControlDivUk.index = 1;

  mapMx.controls[google.maps.ControlPosition.TOP_RIGHT].push(centerControlDivMx);
  mapUk.controls[google.maps.ControlPosition.TOP_RIGHT].push(centerControlDivUk);
}