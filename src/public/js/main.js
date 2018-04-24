$(document).ready(function () {

    var types = [
        {
            id: 'accounting',
            name: 'Accounting'
        },
        {
            id: 'airport',
            name: 'Airport'
        },
        {
            id: 'amusement_park',
            name: 'Amusement park'
        },
        {
            id: 'aquarium',
            name: 'Aquarium'
        },
        {
            id: 'art_gallery',
            name: 'Art gallery'
        },
        {
            id: 'atm',
            name: 'Atm'
        },
        {
            id: 'bakery',
            name: 'Bakery'
        },
        {
            id: 'bank',
            name: 'Bank'
        },
        {
            id: 'bar',
            name: 'Bar'
        },
        {
            id: 'beauty_salon',
            name: 'Beauty salon'
        },
        {
            id: 'bicycle_store',
            name: 'Bicycle store'
        },
        {
            id: 'book_store',
            name: 'Book store'
        },
        {
            id: 'bowling_alley',
            name: 'Bowling alley'
        },
        {
            id: 'bus_station',
            name: 'Bus station'
        },
        {
            id: 'cafe',
            name: 'Cafe'
        },
        {
            id: 'campground',
            name: 'Campground'
        },
        {
            id: 'car_dealer',
            name: 'Car dealer'
        },
        {
            id: 'car_rental',
            name: 'Car rental'
        },
        {
            id: 'car_repair',
            name: 'Car repair'
        },
        {
            id: 'car_wash',
            name: 'Car wash'
        },
        {
            id: 'casino',
            name: 'Casino'
        },
        {
            id: 'cemetery',
            name: 'Cemetery'
        },
        {
            id: 'church',
            name: 'Church'
        },
        {
            id: 'city_hall',
            name: 'City hall'
        },
        {
            id: 'clothing_store',
            name: 'Clothing store'
        },
        {
            id: 'convenience_store',
            name: 'Convenience store'
        },
        {
            id: 'courthouse',
            name: 'Courthouse'
        },
        {
            id: 'dentist',
            name: 'Dentist'
        },
        {
            id: 'department_store',
            name: 'Department store'
        },
        {
            id: 'doctor',
            name: 'Doctor'
        },
        {
            id: 'electrician',
            name: 'Electrician'
        },
        {
            id: 'electronics_store',
            name: 'Electronics store'
        },
        {
            id: 'embassy',
            name: 'Embassy'
        },
        {
            id: 'fire_station',
            name: 'Fire station'
        },
        {
            id: 'florist',
            name: 'Florist'
        },
        {
            id: 'funeral_home',
            name: 'Funeral home'
        },
        {
            id: 'furniture_store',
            name: 'Furniture store'
        },
        {
            id: 'gas_station',
            name: 'Gas station'
        },
        {
            id: 'gym',
            name: 'Gym'
        },
        {
            id: 'hair_care',
            name: 'Hair care'
        },
        {
            id: 'hardware_store',
            name: 'Hardware store'
        },
        {
            id: 'hindu_temple',
            name: 'Hindu temple'
        },
        {
            id: 'home_goods_store',
            name: 'Home goods store'
        },
        {
            id: 'hospital',
            name: 'Hospital'
        },
        {
            id: 'insurance_agency',
            name: 'Insurance agency'
        },
        {
            id: 'jewelry_store',
            name: 'Jewelry store'
        },
        {
            id: 'laundry',
            name: 'Laundry'
        },
        {
            id: 'lawyer',
            name: 'Lawyer'
        },
        {
            id: 'library',
            name: 'Library'
        },
        {
            id: 'liquor_store',
            name: 'Liquor store'
        },
        {
            id: 'local_government_office',
            name: 'Local government office'
        },
        {
            id: 'locksmith',
            name: 'Locksmith'
        },
        {
            id: 'lodging',
            name: 'Lodging'
        },
        {
            id: 'meal_delivery',
            name: 'Meal delivery'
        },
        {
            id: 'meal_takeaway',
            name: 'Meal takeaway'
        },
        {
            id: 'mosque',
            name: 'Mosque'
        },
        {
            id: 'movie_rental',
            name: 'Movie rental'
        },
        {
            id: 'movie_theater',
            name: 'Movie theater'
        },
        {
            id: 'moving_company',
            name: 'Moving company'
        },
        {
            id: 'museum',
            name: 'Museum'
        },
        {
            id: 'night_club',
            name: 'Night club'
        },
        {
            id: 'painter',
            name: 'Painter'
        },
        {
            id: 'park',
            name: 'Park'
        },
        {
            id: 'parking',
            name: 'Parking'
        },
        {
            id: 'pet_store',
            name: 'Pet store'
        },
        {
            id: 'pharmacy',
            name: 'Pharmacy'
        },
        {
            id: 'physiotherapist',
            name: 'Physiotherapist'
        },
        {
            id: 'plumber',
            name: 'Plumber'
        },
        {
            id: 'police',
            name: 'Police'
        },
        {
            id: 'post_office',
            name: 'Post office'
        },
        {
            id: 'real_estate_agency',
            name: 'Real estate agency'
        },
        {
            id: 'restaurant',
            name: 'Restaurant'
        },
        {
            id: 'roofing_contractor',
            name: 'Roofing contractor'
        },
        {
            id: 'rv_park',
            name: 'Rv park'
        },
        {
            id: 'school',
            name: 'School'
        },
        {
            id: 'shoe_store',
            name: 'Shoe store'
        },
        {
            id: 'shopping_mall',
            name: 'Shopping mall'
        },
        {
            id: 'spa',
            name: 'Spa'
        },
        {
            id: 'stadium',
            name: 'Stadium'
        },
        {
            id: 'storage',
            name: 'Storage'
        },
        {
            id: 'store',
            name: 'Store'
        },
        {
            id: 'subway_station',
            name: 'Subway station'
        },
        {
            id: 'supermarket',
            name: 'Supermarket'
        },
        {
            id: 'synagogue',
            name: 'Synagogue'
        },
        {
            id: 'taxi_stand',
            name: 'Taxi stand'
        },
        {
            id: 'train_station',
            name: 'Train station'
        },
        {
            id: 'transit_station',
            name: 'Transit station'
        },
        {
            id: 'travel_agency',
            name: 'Travel agency'
        },
        {
            id: 'veterinary_care',
            name: 'Veterinary care'
        },
        {
            id: 'zoo',
            name: 'Zoo'
        }
    ];

    var places = [];

    function initPage() {
        var $dropdown = $("#type");
        types.forEach(function (item) {
            $dropdown.append($("<option />").val(item.id).text(item.name));
        });
// Run the initialize function when the window has finished loading.
        google.maps.event.addDomListener(window, 'load', initialize);
    }

    $('#search_button').click(function () {
        if (!$('#lat').val() || !$('#lng').val() || ($('#type').val().length === 0)) {
            alert("Set required parameters!");
            return;
        }
        search();
    });
    $('#save_results').click(function () {
        if (places.length > 0) {
            var textMessageContainer = $('#loading > .textMessage');
            textMessageContainer.text("");
            switchLoader(true);
            $.ajax({
                type: "POST",
                contentType: 'application/json',
                data:  JSON.stringify(places),
                dataType: "json",
                url: "/save",
                complete: function () {
                    switchLoader(false);
                    alert("Successfully saved!");
                }
            });
        }
    });

    $('#radius').change(function (event) {
        drawCircle(event.target.value);
    });

    var marker;
    var circle;
    var map;
    var service;

    function search() {
        switchLoader(true);
        var tbody = $("#results > tbody");
        tbody.empty();
        var request = {
            location: new google.maps.LatLng(parseFloat($('#lat').val()), parseFloat($('#lng').val())),
            radius: $('#radius').val(),
            types: $('#type').val()
        };
        var textMessageContainer = $('#loading > .textMessage');
        var allResultsCount = 0;
        var tbodyContent = '';
        places = [];
        service.radarSearch(request, function (data, status) {
            // service.nearbySearch(request, function (data) {
            allResultsCount = data.length;

            if (status !== google.maps.places.PlacesServiceStatus.OK) return false;
            $("#results_count").text(allResultsCount);

            if (!allResultsCount) {
                switchLoader(false);
                return;
            }

            data.forEach(function (item, i) {
                setTimeout(function () {
                    service.getDetails({placeId: item.place_id}, function (data, status) {
                        if (status === google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
                            alert("Query limit is reached!");
                        }

                        if (status !== google.maps.places.PlacesServiceStatus.OK)  return false;

                        var photo = typeof data.photos !== 'undefined' && data.photos.length > 0
                            ? data.photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100})
                            : '';

                        var current = i + 1;

                        places.push({
                            number: current,
                            name: data.name.replace(/['"]+/g, ''),
                            website: data.website ? data.website : '',
                            phone: data.international_phone_number
                        });


                        if (data) {
                            tbodyContent += '<tr><td>' + current + '</td><td><img src="' + photo + '"></td><td>' + data.name + '</td><td>' + (data.website ? ("<a href='" + data.website + "'>" + data.website + "</a>") : 'No Site') + '</td><td>' + data.international_phone_number + '</td></tr>';
                        }
                        if (parseInt(allResultsCount) === parseInt(current)) {
                            switchLoader(false);
                            tbody.append(tbodyContent);
                        } else {
                            textMessageContainer.html("Processed: " + (current) + " <br>Left: " + (allResultsCount - (current)));
                        }
                    });
                }, i * 200);
            });

        });
    }

    function switchLoader(val) {
        if (!val) {
            $('#loading').css('display', 'none')
        } else {
            $('#loading').css('display', 'flex')
        }
    }

    function initialize() {
        var latLng = new google.maps.LatLng(26.339233, -80.111500);

        map = new google.maps.Map(document.getElementById('map'), {
            center: latLng,
            zoom: 10
        });

        service = new google.maps.places.PlacesService(map);

        google.maps.event.addListener(map, 'click', function (event) {
            $('#lat').val(event.latLng.lat());
            $('#lng').val(event.latLng.lng());
            drawPoint(event.latLng);
            drawCircle($('#radius').val());
        });

    }

    function drawPoint(location) {
        if (marker) {
            marker.setMap(null);
        }
        marker = new google.maps.Marker({
            map: map,
            position: location
        });
    }

    function drawCircle(value) {
        if (circle) {
            circle.setMap(null);
        }
        circle = new google.maps.Circle({
            map: map,
            radius: parseInt(value),
            fillColor: '#aaa175'
        });
        circle.bindTo('center', marker, 'position');
    }

    initPage();
});