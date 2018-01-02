/**
 * togglePressed() toggles the aria-pressed atribute between true or false
 *
 * @param ( id object) button to be operated on
 *
 * @return N/A
 */

 var parseProjectsJSON = function(post_rows) {
   // max 10 posts
   post_rows = post_rows || 10;

   // get the template
   var template_markup = $('#project-template').html();

   // get the data
   $.getJSON('http://projects.lsvll.io/recent-projects.json', function(posts) {
     for (var i = 0; i < posts.length; ++i) {
       var post = posts[i];
       // for each post, until we hit max
       // fill out the variables
       if (i < post_rows ) {
         var thisInstance = $(template_markup);
           thisInstance.find('.tile-title').text(post.title);
           thisInstance.find('.tile-subtitle').text(post.subtitle);
           thisInstance.find('.tile-link').attr('href', post.url);
           thisInstance.find('.tile-img').css('background-image', 'url(' + post.img +')');
           thisInstance.find('.tile-date').text(post.date);
           thisInstance.find('.tile-excerpt').text(post.excerpt);
         $('#projects-container').append(thisInstance);
         // and append to the container
       }
     }
   });
 }

 var parseMediumJSON = function(post_rows) {
   // max 10 posts
   post_rows = post_rows || 10;

   // get the template
   var template_markup = $('#project-template').html();

   // get the data
   $.getJSON('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Flouisville-metro-opi2', function(posts) {
     for (var i = 0; i < posts.length; ++i) {
       var post = posts[i];
       // for each post, until we hit max
       // fill out the variables
       if (i < post_rows ) {
         var thisInstance = $(template_markup);
           thisInstance.find('.tile-title').text(post.title);
           thisInstance.find('.tile-subtitle').text(post.subtitle);
           thisInstance.find('.tile-link').attr('href', post.url);
           thisInstance.find('.tile-img').css('background-image', 'url(' + post.img +')');
           thisInstance.find('.tile-date').text(post.date);
           thisInstance.find('.tile-excerpt').text(post.excerpt);
         $('#post-container').append(thisInstance);
         // and append to the container
       }
     }
   });
 }

function togglePressed(element) {

  // reverse the aria-pressed state
  if (element.attr('aria-pressed') == 'true') {
    element.attr('aria-pressed', 'false');
  }
  else {
    element.attr('aria-pressed', 'true');
  }
}



var initMobileMenus = function() {

  var html = $("html");

  var menuButton = $("#drawer-button--menu");
  menuButton.click(function () {
    html.toggleClass("drawer-open--menu");
    togglePressed(menuButton);
  });

  var translateButton = $("#drawer-button--translate");
  translateButton.click(function () {
    html.toggleClass("drawer-open--translate");
    if (html.hasClass("drawer-open--translate")) {
      $(window).scrollTop(0);
    }
    togglePressed(translateButton);
  });

}



var initLinkAttributes = function() {

  $("a").each(function() {
    var is_relative = new RegExp("//" + window.location.host + "/");
    var is_file = new RegExp(".pdf");
    var is_tel = new RegExp("tel:+")
    if (!is_relative.test(this.href)) {
      $(this).attr("target","_blank");
      $(this).addClass("link--external");
    }
    if (is_file.test(this.href)) {
      $(this).attr("target","_blank");
      $(this).addClass("link--file");
    }
    if (is_tel.test(this.href)) {
      $(this).attr("target","_blank");
      $(this).addClass("link--phone");
    }

  });
}



$(document).ready(function(){
  initMobileMenus();
  initLinkAttributes();
});
