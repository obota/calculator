//get day of week
var dayOfWeek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;

//get gender
var getGender =function(){
var gender = document.getElementById("form").element[0].value;
    alert(gender);
}

//Calculate name
if (dayOWeek == "Sunday"){
    if (gender == "Male"){
        alert("Your name is Kwasi");
    }
    else if (gender == "Female"){
        alert("Your name is Akosua");
    }
}
else if (dayOWeek == "Monday"){
    if (gender == "Male"){
        alert("Your name is Kwadwo");
    }
    else if (gender == "Female"){
        alert("Your name is Adwoa");
    }
}
else if (dayOWeek == "Tuesday"){
    if (gender == "Male"){
        alert("Your name is Kwabena");
    }
    else if (gender == "Female"){
        alert("Your name is Abenaa");
    }
}
else if (dayOWeek == "Wednesday"){
    if (gender == "Male"){
        alert("Your name is Kwaku");
    }
    else if (gender == "Female"){
        alert("Your name is Akua");
    }
}
else if (dayOWeek == "Thursday"){
    if (gender == "Male"){
        alert("Your name is Yaw");
    }
    else if (gender == "Female"){
        alert("Your name is Yaa");
    }
}
else if (dayOWeek == "Friday"){
    if (gender == "Male"){
        alert("Your name is Kofi");
    }
    else if (gender == "Female"){
        alert("Your name is Afua");
    }
}
else if (dayOWeek == "Saturday"){
    if (gender == "Male"){
        alert("Your name is Kwame");
    }
    else if (gender == "Female"){
        alert("Your name is Ama");
    }
}
