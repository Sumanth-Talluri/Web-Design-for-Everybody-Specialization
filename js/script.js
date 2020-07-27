function myMap() {
	var mapProp = {
		center: new google.maps.LatLng(17.38714, 78.491684),
		zoom: 13
	};
	var map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
}
