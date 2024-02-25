function calcAge(dob){
    let today = new Date();
    let d = new Date(dob);

    //Finding the age in miliseconds first
    let difference = today.getTime()-d.getTime();

    //Finding age in years, months and days
    let ageMi = difference;
    let ageY = ageMi / (1000 * 60 * 60 * 24 * 365.25);
    let years = Math.floor(ageY);
    let months = Math.floor(((ageY - years) * 12));
    let days = Math.floor((ageY - years) * 365.25 % 30);
    console.log(years, months, days);
    return{
        years: years,
        months: months,
        days: days
    };
}
function undoRed(){
    let input = document.getElementsByClassName("j");
    let text = document.getElementsByClassName("i");
    let down = document.getElementsByClassName("k");
    for(let i=0 ; i<input.length ; i++){
        input[i].style.borderColor = "#7B7B7B";
    }
    for (let i = 0; i < text.length; i++) {
        text[i].style.color = "#7B7B7B";
    }

    for (let i = 0; i < down.length; i++) {
        down[i].innerHTML = "";
    }
}
function doRed(){
    let input = document.getElementsByClassName("j");
    for(let i=0 ; i<input.length ; i++){
        input[i].style.borderColor = "red";
    }
    let text = document.getElementsByClassName("i");
    for(let i=0 ; i<text.length ; i++){
        text[i].style.color = "red";
    }
    let yearsOutput = document.getElementsByClassName("years1")[0];
    let monthsOutput = document.getElementsByClassName("months1")[0];
    let daysOutput = document.getElementsByClassName("days1")[0];
    yearsOutput.innerHTML = "-"+ "&nbsp"+"-"+"&nbsp";
    monthsOutput.innerHTML = "-"+ "&nbsp"+"-"+"&nbsp";
    daysOutput.innerHTML = "-"+ "&nbsp"+"-"+"&nbsp";
}

function dateDownRed(){
    let dateDown = document.getElementById("k1");
    dateDown.innerHTML='Must Be A Valid Date';
    dateDown.style.visibility="visible";
    dateDown.style.color="red";
}
function yearDownRed(){
    let yearDown = document.getElementById("k3");
    yearDown.innerHTML='Must Be In The Past';
    yearDown.style.visibility="visible";
    yearDown.style.color="red";
}
function monthDownRed(){
    let monthDown = document.getElementById("k2");
    monthDown.innerHTML='Must Be A Valid Month';
    monthDown.style.visibility="visible";
    monthDown.style.color="red";
}

function inputData(){
    let dateInput = document.getElementById("j1");
    let monthInput = document.getElementById("j2");
    let yearInput = document.getElementById("j3");
    let dateDown = document.getElementById("k1");
    let monthDown = document.getElementById("k2");
    let yearDown = document.getElementById("k3");
    let date = dateInput.value;
    let month = monthInput.value;
    let actualMonth = month-1;
    let year = yearInput.value;
    let numberDate = parseInt(date);
    let numberMonth = parseInt(actualMonth);
    let numberYear = parseInt(year);
    console.log(numberDate);
    console.log(actualMonth);
    if((date=='') || (month=='') || (year=='')){
        if(date==''){
            dateDown.innerHTML="This field is requied";
        }
        if(month==''){
            monthDown.innerHTML="This field is requied";
        }
        if(year==''){
            yearDown.innerHTML="This field is requied";
        }
        return;
    }

    if((numberYear>2024) || (numberMonth>11) || (numberDate==31 && (numberMonth==1 || numberMonth==3 || numberMonth==5 || numberMonth==8 || numberMonth==10)) || (numberDate>=28 && (numberYear%4!=0) && actualMonth==1) || (numberDate>31)){
        doRed();
        if(numberYear>2024){
            yearDownRed();
        }
        if(numberMonth>11){
            monthDownRed();
        }
        if(numberDate==31 && (numberMonth==1 || numberMonth==3 || numberMonth==5 || numberMonth==8 || numberMonth==10))
        {
            dateDownRed();
        }
        if(numberDate>=28 && (numberYear%4!=0) && actualMonth==1){
            dateDownRed();
        }
        if(numberDate>31){
            dateDownRed();
        }
        return;
    }

    if(date!='' && month!='' && year!='')
    {
        let dob = new Date(year, actualMonth, date);
        let age = calcAge(dob);
        displayValue(age.years, age.months, age.days);
        undoRed();
    }
    else{
        doRed();
    }
}
function displayValue(years, months, days){
    let yearsOutput = document.getElementsByClassName("years1")[0];
    let monthsOutput = document.getElementsByClassName("months1")[0];
    let daysOutput = document.getElementsByClassName("days1")[0];
    let yearsString = years.toString();
    let monthsString = months.toString();
    let daysString = days.toString();
    if(Number.isNaN(years) || Number.isNaN(months) || Number.isNaN(days)){
        doRed();
        return;
    }
    else
    {
        yearsOutput.innerHTML = yearsString + "&nbsp";
        monthsOutput.innerHTML = monthsString + "&nbsp";
        daysOutput.innerHTML = daysString + "&nbsp";
    }
}

