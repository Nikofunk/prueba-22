window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  // Obtener el valor de la variable en Storyline
var player = GetPlayer();
var score = player.GetVar("userScore");

// Enviar los datos a Google Apps Script
var url = "140SJOPXiIVQ6gircIkPcBGOLqK1njKzQSscoiF-e0Nl1Vi_jmqs4k9p-"; // Reemplaza con tu Script ID
var data = {
    "score": score,
    "timestamp": new Date().toISOString()
};

fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log("Datos enviados:", data))
.catch(error => console.error("Error:", error));

}

window.Script2 = function()
{
  /var data = {
    variable1: player.GetVar("Variable1"),
    variable2: player.GetVar("Variable2"),
    variable3: player.GetVar("Variable3")
};

var url = "https://forms.office.com/Pages/DesignPageV2.aspx?subpage=design&FormId=KajUIt1TDU-7HGar6lvvSfc_kMMzXyZBkFVmDQup9pNUN1RNS1RGS1BDTE45TjgyVkFIQUhXQTJWOC4u&Token=611a2a364d294f98a03efab115265b90";

fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json"
    }
}).then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

}

};
