var sectionOne = $('#section1');
var sectionTwo = $('#section2');
var sectionThree = $('#section3');
var sectionFour = $('#contactContainer');
var distance1 = Math.round(sectionOne.offset().top);
var distance2 = Math.round(sectionTwo.offset().top);
var distance2_Init = distance2;
var distance3 = Math.round(sectionThree.offset().top);
var distance4 = Math.round(sectionFour.offset().top);
var distance1_bottom = Math.round(distance1 + sectionOne.innerHeight());
var distance2_bottom = Math.round(distance2 + sectionTwo.innerHeight());
var distance2_bottomInit = distance2_bottom;
var distance3_bottom = Math.round(distance3 + sectionThree.innerHeight()); 
var distance3_bottomInit = distance3_bottom; 
var distance4_bottom = Math.round(distance4 + sectionFour.innerHeight()); 



var Line1 = $("#followLine1");
var Line2 = $("#followLine2");
var Line3 = $("#followLine3");
var line1_Location = Math.round(Line1.offset().top);
var line2_Location = Math.round(Line2.offset().top);
var line3_Location = Math.round(Line3.offset().top);

$window = $(window);
var navbarElement1 = $("#navbarElement1");
var navbarElement2 = $("#navbarElement2");
var navbarElement3 = $("#navbarElement3");
var navbarElement4 = $("#navbarElement4");

$window.scroll(function() {
  var currentScroll = $window.scrollTop()+100;
  var currentHead = currentScroll + 200;



if (currentScroll  >= distance1 && currentScroll  <= distance1_bottom) {
  if (!navbarElement1.hasClass("currentLink")) {
    navbarElement1.addClass("currentLink");
  }
  var navbar2Status = navbarElement2.hasClass("currentLink");
  var navbar3Status = navbarElement3.hasClass("currentLink");
  var navbar4Status = navbarElement4.hasClass("currentLink");
  if (navbar2Status || navbar3Status || navbar4Status) {
    if (navbar2Status) {
      navbarElement2.removeClass("currentLink");
    }
    else if (navbar3Status) {
      navbarElement3.removeClass("currentLink");
    }
    else {
      navbarElement4.removeClass("currentLink");
    }
  }


if(currentHead > line1_Location && currentHead < distance1_bottom) {
  var distance = currentHead - line1_Location;
  Line1_move(distance);

}


}


else if(currentScroll  >= distance2 && currentScroll  <= distance2_bottom) {

  if (!navbarElement2.hasClass("currentLink")) {
    navbarElement2.addClass("currentLink");
  }
  var navbar1Status = navbarElement1.hasClass("currentLink");
  var navbar3Status = navbarElement3.hasClass("currentLink");
  var navbar4Status = navbarElement4.hasClass("currentLink");
  if (navbar1Status || navbar3Status || navbar4Status) {
    if (navbar1Status) {
      navbarElement1.removeClass("currentLink");
    }
    else if (navbar3Status) {
      navbarElement3.removeClass("currentLink");
    }
    else {
      navbarElement4.removeClass("currentLink");
    }
  }

  if(currentHead > line2_Location && currentHead < distance2_bottom) {
  var distance = currentHead - line2_Location;
  Line2_move(distance);

}

}


else if(currentScroll  >= distance3 && currentScroll  <= distance3_bottom) {
/*Navbar Elements highlist*/
  if (!navbarElement3.hasClass("currentLink")) {
    navbarElement3.addClass("currentLink");
  }
  var navbar2Status = navbarElement2.hasClass("currentLink");
  var navbar1Status = navbarElement1.hasClass("currentLink");
  var navbar4Status = navbarElement4.hasClass("currentLink");
  if (navbar1Status || navbar2Status || navbar4Status) {
    if (navbar2Status) {
      navbarElement2.removeClass("currentLink");
    }
    else if (navbar1Status) {
      navbarElement1.removeClass("currentLink");
    }
    else {
      navbarElement4.removeClass("currentLink");
    }
  }
/*Navbar Elements highlist END*/
if(currentHead > line3_Location && currentHead < distance3_bottom) {
  var distance = currentHead - line3_Location;
  Line3_move(distance);

}

}


else if(currentScroll  >= distance4 && currentScroll  <= distance4_bottom) {

  if (!navbarElement4.hasClass("currentLink")) {
    navbarElement4.addClass("currentLink");
  }
  var navbar2Status = navbarElement2.hasClass("currentLink");
  var navbar3Status = navbarElement3.hasClass("currentLink");
  var navbar1Status = navbarElement1.hasClass("currentLink");
  if (navbar2Status || navbar3Status || navbar1Status) {
    if (navbar2Status) {
      navbarElement2.removeClass("currentLink");
    }
    else if (navbar3Status) {
      navbarElement3.removeClass("currentLink");
    }
    else {
      navbarElement1.removeClass("currentLink");
    }
  }

}


else {
  var navbar2Status = navbarElement2.hasClass("currentLink");
  var navbar1Status = navbarElement1.hasClass("currentLink");
  var navbar3Status = navbarElement3.hasClass("currentLink");
  var navbar4Status = navbarElement4.hasClass("currentLink");

  if (navbar1Status || navbar2Status || navbar3Status || navbar4Status) {
    if (navbar1Status) {
      navbarElement1.removeClass("currentLink");
    }
    else if (navbar2Status) {
      navbarElement2.removeClass("currentLink");
    }
    else if (navbar3Status) {
      navbarElement3.removeClass("currentLink");
    }
    else {
      navbarElement4.removeClass("currentLink");
    }
  }
}


});


function updateSections () {
  distance2 = Math.round(sectionTwo.offset().top);
  distance2_bottom = Math.round(distance2 + sectionTwo.innerHeight());

  distance3 = Math.round(sectionThree.offset().top);
  distance3_bottom = Math.round(distance3 + sectionThree.innerHeight());

  distance4 = Math.round(sectionFour.offset().top);
  distance4_bottom = Math.round(distance4 + sectionFour.innerHeight());

  line2_Location = Math.round(Line2.offset().top);
  line3_Location = Math.round(Line3.offset().top);
}

$(".collapse").on('shown.bs.collapse', function(){
    updateSections();
    $("#timelineViewBTN").html("Hide It!");
});
$(".collapse").on('hidden.bs.collapse', function(){
    Line2_move(distance2_bottomInit - distance2_Init - 160);
    updateSections();
    $("#timelineViewBTN").html("View my boring timeline!");
});


$("#section1").mousemove(function(e) {
  var mousePos = e.pageY;
  if (!(mousePos >= distance1_bottom)) {
    var divHeight = mousePos - line1_Location;
    if (divHeight < 0) {
      Line1_move(0);
    }
    else {
      Line1_move(divHeight);
    }
  }
}).mouseover();

$("#section2").mousemove(function(e) {
  var mousePos = e.pageY;
  if (!(mousePos >= distance2_bottom)) {
    var divHeight = mousePos - line2_Location;
    if (divHeight < 0) {
      Line2_move(0);
    }
    else {
      Line2_move(divHeight);
    }
  }
}).mouseover();

$("#section3").mousemove(function(e) {
  var mousePos = e.pageY;
  if (!(mousePos >= distance3_bottom)) {
    var divHeight = mousePos - line3_Location;
    if (divHeight < 0) {
      Line3_move(0);
    }
    else {
      Line3_move(divHeight);
    }
  }
}).mouseover();

function Line1_move (distance) {
  Line1.height(distance);
}
function Line2_move (distance) {
 Line2.height(distance);  
}
function Line3_move (distance) {
  Line3.height(distance);
} 