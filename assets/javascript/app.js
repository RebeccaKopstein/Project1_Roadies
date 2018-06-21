$(document).ready(function () {

    var apiKEY = "AIzaSyDYm1_qkLonvPsRYs9N1k-cwvEIwVATWkY"
    $(document).on("click", "#search", function () {
        var youtubeVideo = $("#name").val().trim();
        var str = youtubeVideo.replace(/\s+/g, "");
        console.log(str);


        var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=" +
            youtubeVideo + "&key=" + apiKEY + "&maxResults=3";

        console.log(queryURL)

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            console.log(response.items[0].snippet.title)
            console.log(response.items[0].id.videoId)

            var videoId1 = response.items[0].id.videoId
            $('#youTube1').attr('src', "https://www.youtube.com/embed/" + videoId1)

            var videoId2 = response.items[1].id.videoId
            $('#youTube2').attr('src', "https://www.youtube.com/embed/" + videoId2)

            var videoId3 = response.items[2].id.videoId
            $('#youTube3').attr('src', "https://www.youtube.com/embed/" + videoId3)

        });
        // search()
        var apiKeyTm = "ABJmmwT5erF9dGVuWEGiEhDZNsQojazj";
        var queryURLTm =
            "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" +
            str +
            "&apikey=" +
            apiKeyTm +
            "&maxResults=1";

        console.log(queryURLTm);

        $.ajax({
            url: queryURLTm,
            method: "GET"
        }).done(function (json) {
            console.log(json);
            var events = json._embedded.events;

            $(".is-success").empty();
            var bandName = events[0].name;
            var bandImage = events[0].images[0].url;
            $(".is-success").append("<p><h1>" + bandName + "</h1></p>");
            $(".is-success").append("<img src= " + bandImage + ">");
            for (var i = 0; i < events.length; i++) {



                var date = events[i].dates.start.localDate;
                var venue = events[i]._embedded.venues[0].name;
                var venueAddress = events[i]._embedded.venues[0].address.line1;
                var venueCity = events[i]._embedded.venues[0].city.name;
                var venueState = events[i]._embedded.venues[0].state.name;
                var venueCountry = events[i]._embedded.venues[0].country.name;
                var seatMap = events[i].url;
                console.log(bandName);
                console.log(bandImage);
                console.log(date);
                console.log(venue);
                console.log(venueAddress);

                $(".is-success").append("<p>Venue: " + venue + "</p>");
                $(".is-success").append("<p>Date: " + date + "</p>");
                $(".is-success").append(
                    "<p>Address: " +
                    venueAddress +
                    "<br>" +
                    venueCity +
                    "<br>" +
                    venueState +
                    "</p>"
                );
                if ((venueState === false)) {
                    $(".is-success").append("<p>Address: " + venueCountry + "</p>");

                }
                $(".is-success").append(
                    "<p>" + "<a href=" + seatMap + ">Buy Tickets Now!</a>" + "</p>"
                );
                $(".is-success").append("<p>" + "___________________________________________________________" + "</p>");

            }




        })

        jQuery.ajaxPrefilter(function (options) {
            if (options.crossDomain && jQuery.support.cors) {
                options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
            }
        });

        //Ticketmaster JS----------------------------------------//



    });
})



