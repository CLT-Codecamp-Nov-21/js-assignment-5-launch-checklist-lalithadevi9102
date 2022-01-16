// Write your JavaScript code here!

window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = pickPlanet(result);
        addDestinationInfo(document, listedPlanets["name"], listedPlanets["diameter"], listedPlanets["star"], listedPlanets["distance"], listedPlanets["moons"], listedPlanets["image"]);
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
    console.log(listedPlanets);
    const faultyList = document.getElementById("faultyItems");
    faultyList.style.visibility = "hidden";
    let form = document.querySelector("#form");
    const propagation = true;
    form.addEventListener("submit", function(event){
        let pilotName = document.querySelector("div.formField [name=pilotName]").value;
        let copilotName = document.querySelector("div.formField [name=copilotName]").value;
        let fuelLevel = document.querySelector("div.formField [name=fuelLevel]").value;
        let cargoMass = document.querySelector("div.formField [name=cargoMass]").value;
        if(formSubmission(document, faultyList, pilotName, copilotName, fuelLevel, cargoMass) === "Empty"){
            alert("All fields are required!");
        }else if(formSubmission(document, faultyList, pilotName, copilotName, fuelLevel, cargoMass) === "Invalid"){
            alert("Make sure to enter valid information for each field!");
        }
        event.preventDefault();
    });
   
});