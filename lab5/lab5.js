

// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://flaviocopes.com/javascript-regular-expressions/
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers
var x = null;


function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^(\([-+]?[0-9]+)\)$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCard(txtCard) {
    var a = document.getElementById(txtCard).value
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    console.log(a);
    var b = String(a);
    var strip = b.replace(/\s/g,'');
    console.log(strip);
    var filter = /^\d{16}$/;
    if (filter.test(strip)) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(txtEmail) {
    var a = document.getElementById(txtEmail).value
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    console.log(a);
    var b = String(a);
    var strip = b.replace(/\s/g,'');
    console.log(strip);
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (filter.test(strip)) {
        return true;
    }
    else {
        return false;
    }
}

function validateDate(txtDate) {
    var a = document.getElementById(txtDate).value
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    console.log(a);
    var b = String(a);
    var strip = b.replace(/\s/g,'');
    console.log(strip);
    var filter = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
    if (filter.test(strip)) {
        return true;
    }
    else {
        return false;
    }
}

function validateMech(mech){
  var a = mech;
  console.log(a);
  if (a=="samMech"){
    x = 2;
  }
  else if(a == "jamesMech"){
    x = 1;
  }
  else if(a == "leviMech"){
    x = 0;
  }

  console.log(x);

  return x;


}

// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"]
var leviDates = [1,3,4];
var samDates = [0,2,5];
var jamesDates = [0,4];
const setDateFormat = "mm/dd/yy";

// function disableDates(date) {
//     // Sunday is Day 0, disable all Sundays
//     var w = null;
//     var string = jQuery.datepicker.formatDate(setDateFormat, date);
//     // if (date.getDay() == 0)
//     //     return [false];
//     // console.log(x);
//
//     if(x == 2){
//       // w = samDates
//       // return [ samDates.indexOf(string) == -1 ];
//       return[date.getDay()!= 0 && date.getDay()!= 2 && date.getDay()!=5]
//
//
//
//     }
//     else if(x==1){
//       return [date.getDay()!= 0 && date.getDay()!= 4];
//     }
//     else if(x==0){
//       return [date.getDay()!= 1 && date.getDay()!= 3 && date.getDay()!=6];
//     }
//   }


// function disableDates(date) {
//     // Sunday is Day 0, disable all Sundays
//     if (x==2)
//       return [date.getDay()!= 0 && date.getDay()!= 2 && date.getDay()!=5];
//
//     else if(x==1){
//       return [date.getDay()!= 0 && date.getDay()!= 4];
//     }
//
//     else if(x==0){
//       return [date.getDay()!= 1 && date.getDay()!= 3 && date.getDay()!=6];
//     }
// }

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    // if (date.getDay() == 0)
    //     return [false];
    // var string = jQuery.datepicker.formatDate(setDateFormat, date);
    if(x ==2){
      return [date.getDay()!= 0 && date.getDay()!= 2 && date.getDay()!=5];
    }
    else if(x==1){
      return [date.getDay()!= 0 && date.getDay()!= 4];
    }
    else if(x==0){
      return [date.getDay()!= 1 && date.getDay()!= 3 && date.getDay()!=6];
    }else{
      return[true];
    }





}




// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    //
    // $("#mech").on("change", function(){
    //     var a  = null;
    //     if (validateMech("mech")==2){
    //         // alert("Wrong format for phone");
    //         // $("#phone").val("(xxxx)");
    //         a = 2;
    //         console.log(a);
    //         // $("#phone").addClass("error");
    //         disableDates(x);
    //     }
    //     else {
    //         $("#phone").removeClass("error");
    //     }
    // });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    $( "#dateTimeInput" ).datepicker(
        {

            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),
            maxDate: '+4M',
            // used to disable some dates
            // beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates

        }
    );


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put

    $("#credit").on("change", function(){
        if (!validateCard("credit")){
            alert("Wrong format for credit card");
            $("#credit").val("xxxx xxxx xxxx xxxx");
            $("#credit").addClass("error");
        }
        else {
            $("credit").removeClass("error");
        }
    });

    $("#credit").on("mouseenter", function(){
        $("#credit").addClass("showInput");
    });

    $("#credit").on("mouseleave", function(){
        $("#credit").removeClass("showInput");
    });



    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#credit").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });





      $("#email").on("change", function(){
          if (!validateEmail("email")){
              alert("Wrong format for email");
              $("#email").val("abc@123.com");
              $("#email").addClass("error");
          }
          else {
              $("email").removeClass("error");
          }
      });

      $("#email").on("mouseenter", function(){
          $("#email").addClass("showInput");
      });

      $("#email").on("mouseleave", function(){
          $("#email").removeClass("showInput");
      });



      // https://jqueryui.com/tooltip/
      // The class "highlight" used here is predefined in JQuery UI
      // the message of the tooltip is encoded in the input (in the HTML file)
      $("#email").tooltip({
          classes: {
            "ui-tooltip": "highlight"
          }
        });





        // $("#dateTimeInput").on("change", function(){
        //     if (!validateDate("dateTimeInput")){
        //         alert("Wrong format for date");
        //         $("#dateTimeInput").val("mm/dd/yyyy");
        //         $("#dateTimeInput").addClass("error");
        //     }
        //     else {
        //         $("#dateTimeInput").removeClass("error");
        //     }
        // });
        //
        // $("#dateTimeInput").on("mouseenter", function(){
        //     $("#dateTimeInput").addClass("showInput");
        // });
        //
        // $("#dateTimeInput").on("mouseleave", function(){
        //     $("#dateTimeInput").removeClass("showInput");
        // });
        //
        //
        //
        // // https://jqueryui.com/tooltip/
        // // The class "highlight" used here is predefined in JQuery UI
        // // the message of the tooltip is encoded in the input (in the HTML file)
        // $("#dateTimeInput").tooltip({
        //     classes: {
        //       "ui-tooltip": "highlight"
        //     }
        //   });









});
