// Création d'une requête HTTP
var xhr = new XMLHttpRequest();
//Requête HTTP GET asynchrone: méthode open permet de configurer la requête HTTP avant son lancement. Elle prend en paramètres le type de requête HTTP
xhr.open('get', 'data.txt');
var button = document.getElementById("button");
button.addEventListener('click', loadData);

function loadData(){
    xhr.onload = function(){ 
    //Un événement de type load indique la fin du traitement de la requête par le serveur.POUR notifié  la disponibilité de la réponse et pourra y réagir dans la méthode asynchrone
        if (xhr.status >= 200 && xhr.status < 400) { // Le serveur a réussi à traiter la requête
            //propriété responseText contient sous forme textuelle la réponse renvoyée par le serveur à la requête HTTP.
            document.getElementById("output").innerHTML = xhr.responseText;
        }else if(xhr.status == 404){
            console.log("error 404");
        }
    };
    // Envoi de la requête
    xhr.send(null);
}