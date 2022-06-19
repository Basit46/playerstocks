const cont = document.querySelector(".container");
const box1 = document.querySelector(".container .box1");
const box2 = document.querySelector(".container .box2");
const input = document.querySelector(".input-box input");
const searchBtn = document.querySelector(".input-box .search");
const playerImg = document.querySelector(".box1 .details img");
const playerName = document.querySelector(".box1 .details h2");
const playerId = document.querySelector(".box1 .details .player-id span");
const playerCountry = document.querySelector(".box1 .details .country span");
const playerAge = document.querySelector(".box1 .details .age span");
const saveBtn = document.querySelector(".box2 .save");
const removeBtns = document.querySelectorAll("tbody .removeParent .remove")
const footer = document.querySelector("footer");

searchBtn.addEventListener("click", function(){
    inputVal = input.value;
    fetch(`https://soccer.sportmonks.com/api/v2.0/players/search/${inputVal}?api_token=LbmWMuajdM3ez8jkGA0MgOA0G54CmCIS1rp6skKhA6YnfxVjWtbhBrnh6ARf`)
    .then(res => res.json())
    .then(outcome => {
        playerName.innerText = outcome.data[0].display_name;
        playerId.innerText = outcome.data[0].player_id;
        playerCountry.innerText = outcome.data[0].nationality;
        playerAge.innerText = outcome.data[0].birthdate;
        playerImg.src = outcome.data[0].image_path;
    })
    .catch(error => alert(`${inputVal} una!!, Enter proper name amigo`))
})


const addBtn = document.querySelector(".box1 .details .add");
const playersList = document.querySelector(".box2 .players table ")

addBtn.addEventListener("click", function(){
    var toBeAdded = document.createElement("tbody");
    toBeAdded.innerHTML = `
    <tbody>
    <td>${inputVal.toUpperCase()}</td>
    <td>${playerId.innerText}</td>
    <td class="removeParent"><button class="remove" onclick="removePlayer(this)">REMOVE</button></td>
    </tbody>
    `
    playersList.append(toBeAdded)

    const removeBtns = document.querySelectorAll("tbody .removeParent .remove")
    saveBtn.addEventListener("click", function(e){
        theClickedBtn = e.target;
        theClickedBtn.style.display ="none"
        box1.style.display = "none"
        box2.style.height = "500px"
        cont.style.justifyContent = "center"
        footer.style.visibility = "visible"
        removeBtns.forEach(function(removeBtn){
            removeBtn.style.display = "none"
        })
    })

})

function removePlayer(theBtn){
    theBtn.parentElement.parentElement.remove();
}


saveBtn.addEventListener("click", function(e){
    theClickedBtn = e.target;
    theClickedBtn.style.display ="none"
    box1.style.display = "none"
    box2.style.height = "500px"
    cont.style.justifyContent = "center"
    footer.style.visibility = "visible"
        removeBtns.forEach(function(removeBtn){
            removeBtn.style.display = "none"
        })
})


