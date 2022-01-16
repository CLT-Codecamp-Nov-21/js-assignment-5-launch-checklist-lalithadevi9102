// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
    listedPlanets = pickPlanet(result);
    addDestinationInfo(document, listedPlanets["name"], listedPlanets["diameter"], listedPlanets["star"], listedPlanets["distance"], listedPlanets["moons"], listedPlanets["image"]);
   console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);

       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

       let list = document.getElementById('faultyItems');
    list.style.visibility = "hidden";
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
       
        //List DOM
        let pilot = document.querySelector("input[name=pilotName]").value;
        let coPilot = document.querySelector("input[name=copilotName]").value;
        let fuel = document.querySelector("input[name=fuelLevel]").value;
        let cargo = document.querySelector("input[name=cargoMass]").value;
       
            formSubmission(document,list,pilot,copilot,fuelLevel,cargoLevel);

        event.preventDefault();
        if(formSubmission(document, list, pilot, coPilot, fuel, cargo) === "Empty"){
            alert("All field values are required!");
        }else if(formSubmission(document, list, pilot, coPilot, fuel, cargo) === "Invalid"){
            alert("Make sure to enter valid data in each field!");
        }
    });    
   
});
});