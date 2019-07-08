const player1 = "Paul"
const player2 = "Dylan"
const player3 = "Jordane"


    var form = document.querySelector(".form");
    var text_fields = document.querySelectorAll(".add_player");
    var array = []
    var player_list = []
    console.log(array)
    function validatenames() {
        for ( const text_field of text_fields){
            var text_field_id = text_field.id;
            var inputvalue = text_field.value
            var title = document.querySelector(`#title${text_field_id}`);
            if (inputvalue != ""  && inputvalue != null) {
                title.innerHTML = inputvalue
                title.style.color="blue"
                array[text_field_id-1] = inputvalue;
            } else {
                title.style.color="red"
            }
            console.log("titre : "  + title.innerHTML)
            console.log(array)
    }
}


var val_btn = document.querySelector(".validate_name")
console.log(val_btn)
val_btn.addEventListener("click",function(e){
     if (confirm("You're about to validate the player names")){
         player_list = []
        validatenames();
     }

     for(var i = 0; i < array.length; i++){
         if(array[i] != null ){
             var uppercased = array[i].toUpperCase();
            player_list.push(uppercased)
         }
     }
    console.log("liste joueur:  " + player_list)
})
    
function showjobs(){
    const job_db=["Fireman", "Striper", "Webmaster", "SuperHero", "Hallal Butcher", "Bus driver", "School Psychologist", "Teacher"];
    var job_div = document.querySelector(".jobs_checkboxes");

    for (let i = 0; i < job_db.length; i++) {
        const element = job_db[i];
        var global_div = document.createElement("div");
        global_div.classList.add("col-12")
        global_div.classList.add("row")
        global_div.classList.add("justify-content-center")
        global_div.classList.add("text-left")
        
        var label = document.createElement("label");
        label.appendChild(document.createTextNode(job_db[i]))
        label.id = "label" + i
        label.classList.add("col-10")


        var checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.id= "checkbox" + i
        checkbox.classList.add("col-2")
        


        global_div.appendChild(checkbox);
        global_div.appendChild(label);
        job_div.appendChild(global_div);
    }
}
showjobs();

 

