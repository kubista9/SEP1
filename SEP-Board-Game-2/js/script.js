$.get("xml/games.xml", function (xml, status) {
    var txt = "<table class='myClass'><tr><th class='myClass'>#</th><th class='myClass'>Game</th><th class='myClass'>Players</th><th class='myClass'>Game owner</th><th class='myClass'>Lend to</th><th class='myClass'>Date of lend</th></tr>";
    $(xml).find("game").each(function(){

        var order = $(this).find("order").text();
        var nameOfGame = $(this).find("nameOfGame").text();
        var numberOfPlayers = $(this).find("numberOfPlayers").text();
        var gameOwner = $(this).find("gameOwner").text();
        var lendTo = $(this).find("lendTo").text();
        var dateOfLend = $(this).find("dateOfLend").text();

        txt += "<tr><td class='myClass'>" + order + "</td><td class='myClass'>" + nameOfGame + "</td><td class='myClass'>" + numberOfPlayers + "</td><td class='myClass'>" + gameOwner + "</td><td class='myClass'>" + lendTo + "</td><td class='myClass'>" + dateOfLend + "</td></tr>";
    });
    txt += "</table>";
    $("#tableOfGames").html(txt);
});

$.get("xml/events.xml", function (xml, status) {
    var txt = "<div class='container text-left event-container'><div class='row' id='firstEvent'><div class='col'>";
    $(xml).find("event").each(function(){

        var nameOfTheEvent = $(this).find("nameOfTheEvent").text();
        var date = $(this).find("date").text();
        var place = $(this).find("place").text();
        var description = $(this).find("description").text();

        txt += "<h2>" + nameOfTheEvent + "</h2><p> Date" + " " + date + "</p><p> Place:" + " " + place + "</p></div><div class='col'><p>" + description + "</p></div></div></div><div class='container text-left event-container'><div class='row'><div class='col'>";
    });
    txt += "</table>";
    $("#tableOfEvents").html(txt);
});














