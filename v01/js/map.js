function initMap() {

							var styledMapType = new google.maps.StyledMapType(

				[
		    {
		        "featureType": "administrative",
		        "elementType": "all",
		        "stylers": [
		            {
		                "saturation": "-100"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.province",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape",
		        "elementType": "all",
		        "stylers": [
		            {
		                "saturation": -100
		            },
		            {
		                "lightness": 65
		            },
		            {
		                "visibility": "on"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "all",
		        "stylers": [
		            {
		                "saturation": -100
		            },
		            {
		                "lightness": "50"
		            },
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "all",
		        "stylers": [
		            {
		                "saturation": "-100"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "road.arterial",
		        "elementType": "all",
		        "stylers": [
		            {
		                "lightness": "30"
		            }
		        ]
		    },
		    {
		        "featureType": "road.local",
		        "elementType": "all",
		        "stylers": [
		            {
		                "lightness": "40"
		            }
		        ]
		    },
		    {
		        "featureType": "transit",
		        "elementType": "all",
		        "stylers": [
		            {
		                "saturation": -100
		            },
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "hue": "#ffff00"
		            },
		            {
		                "lightness": -25
		            },
		            {
		                "saturation": -97
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "lightness": -25
		            },
		            {
		                "saturation": -100
		            }
		        ]
		    }
		],

				{name: 'Styled Map'});


		  		var map = new google.maps.Map(document.getElementById('map'), {
		    	center: {lat: 46.80121, lng: 8.226692},
		    	zoom: 5,
		  		});

		  		map.data.loadGeoJson('data/mapdata.geojson');


		        //Associate the styled map with the MapTypeId and set it to display.
		        map.mapTypes.set('styled_map', styledMapType);
		        map.setMapTypeId('styled_map');

		        map.data.setStyle({
		  		icon: 'img/map-marker.png',
				});

		  		// global infowindow
		  		var infowindow = new google.maps.InfoWindow();

		  		// When the user clicks, open an infowindow
				map.data.addListener('click', function(event) {
				var myHTML = event.feature.getProperty("Projekttitel");
				var caption = event.feature.getProperty("Website");
				var clicked = false;
				infowindow.setContent("<div class='text-center'><h4  class='text-muted'>"+myHTML+"</h4><a href="+caption+">Weitere Informationen</a></div>");
				// position the infowindow on the marker
				infowindow.setPosition(event.feature.getGeometry().get());
				// anchor the infowindow on the marker
				infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)});
				infowindow.open(map);
				});
				}
				// Call the initialize function after the page has finished loading
		      	google.maps.event.addDomListener(window, 'load', initialize);
		    	</script>
