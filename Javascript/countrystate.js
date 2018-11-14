function addOption(select, value){
    var obj = document.createElement("option");//<option value>text</option>
    obj.text = value;
     obj.value = value;
// document.getElementById("country").appendChild(obj);
  select.options.add(obj);
}

var country = ["select country","India","China","Japan"];
var india = ["ap","up","ts"];
var china = ["china1","china2"];
var japan = ["japan1","japan2"];
function getCountry(){

    for(i=0;i<country.length;i++){
        addOption(document.getElementById("country"), country[i]);
    }
}

function getState(country){
    document.getElementById("state").options.length = 1;
    if(country == 'select country'){
        document.getElementById("state").disabled = true;

    }else{
        document.getElementById("state").disabled = false;
    }

    if(country == 'India'){
        for(i=0;i<india.length;i++){
            addOption(document.getElementById("state"), india[i]);
        }
    }
    if(country == 'China'){
        for(i=0;i<china.length;i++){
            addOption(document.getElementById("state"), china[i]);
        }
    }
    if(country == 'Japan'){
        for(i=0;i<japan.length;i++){
            addOption(document.getElementById("state"), japan[i]);
        }
    }

}