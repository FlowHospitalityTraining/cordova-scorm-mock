var query = jQuery(".ev-canvas");
// query.css({ "background-color": "yellow", "font-size": "200%" });

// console.log("world!", query);c

// jQuery("html .ev-canvas").on("load", function () {
//   var head = jQuery("html .ev-canvas").contents().find("head");
//   var css = "html { background-color:yellow!important }";
//   jQuery(head).append(css);
// });

window.onload = function () {
  var myContent = jQuery('#content');
  myContent.contents().find('body').append($("<p>this isn't sparta</p>"));
  // var jContent = $('#content');
  myContent.css({"backgroundColor":"yellow!important","color":"white"});
  var hmtl = document.querySelector("html");
  var styles='html { background-color:yellow!important }';
  console.log(myContent);
  console.log(hmtl);
};
