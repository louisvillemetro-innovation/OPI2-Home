/**
 * togglePressed() toggles the aria-pressed atribute between true or false
 *
 * @param ( id object) button to be operated on
 *
 * @return N/A
 */


 $( document ).ready(function() {

     scaleVideoContainer();

     initBannerVideoSize('.video-container .poster img');
     initBannerVideoSize('.video-container .filter');
     initBannerVideoSize('.video-container video');

     $(window).on('resize', function() {
         scaleVideoContainer();
         scaleBannerVideoSize('.video-container .poster img');
         scaleBannerVideoSize('.video-container .filter');
         scaleBannerVideoSize('.video-container video');
     });

 });

 function scaleVideoContainer() {

     var height = $(window).height() - 100;
     var unitHeight = parseInt(height) + 'px';
     $('.homepage-hero-module').css('height',unitHeight);

 }

 function initBannerVideoSize(element){

     $(element).each(function(){
         $(this).data('height', $(this).height());
         $(this).data('width', $(this).width());
     });

     scaleBannerVideoSize(element);

 }

 function scaleBannerVideoSize(element){

     var windowWidth = $(window).width(),
     windowHeight = $(window).height() + 5,
     videoWidth,
     videoHeight;

     // console.log(windowHeight);

     $(element).each(function(){
         var videoAspectRatio = $(this).data('height')/$(this).data('width');

         $(this).width(windowWidth);

         if(windowWidth < 1000){
             videoHeight = windowHeight;
             videoWidth = videoHeight / videoAspectRatio;
             $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

             $(this).width(videoWidth).height(videoHeight);
         }

         $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

     });
 }

 var parseMediumJSON = function(post_rows) {
   // max 10 posts
   post_rows = post_rows || 10;

   // get the template
   var template_markup = $('#post-template').html();
 // get the data
 $.getJSON('https://ruj5140zfg.execute-api.us-east-1.amazonaws.com/Production', function(data) {
   var author_list = data.payload.references.User;
   var all_posts = data.payload.posts;
   var posts_to_output = $.map(all_posts, function(post, index){
     var author = author_list[post.creatorId];
     var cleaned_post = {

       post_title:       post.title,

                         // get full URL, prepend Medium collection
       post_url:         "https://medium.com/louisville-metro-opi2/" + post.uniqueSlug,

                         // get full Image URL, append Medium CDN
       post_image_url:   "https://cdn-images-1.medium.com/max/1000/" + post.virtuals.previewImage.imageId,

                         // get author name by ID, from user_list
       post_author_name: author.name,

                         // get author pic by ID
       post_author_pic:  "https://cdn-images-1.medium.com/fit/c/60/60/" + author.imageId,

                         // convert date to human-readable string
       post_date:        new Date(post.firstPublishedAt).format('F j, Y')

     };

     // for each post, until we hit max
     // fill out the variables
     if (index < post_rows ) {
       var thisInstance = $(template_markup);
         thisInstance.find('.tile-title').text(cleaned_post.post_title);
         thisInstance.find('.tile-link').attr('href', cleaned_post.post_url);
         thisInstance.find('.tile-img').css('background-image', 'url(' + cleaned_post.post_image_url +')');
         thisInstance.find('.tile-author-pic').attr('src', cleaned_post.post_author_pic).attr('alt', cleaned_post.post_author_name);
         thisInstance.find('.tile-author').text(cleaned_post.post_author_name);
         thisInstance.find('.tile-date').text(cleaned_post.post_date);
       $('#post-container').append(thisInstance);
       // and append to the container
     }

     return cleaned_post;
     console.log(all_posts);
   });
});
}


var parseProjectsJSON = function(post_rows) {
  // max 10 posts
  post_rows = post_rows || 10;

  // get the template
  var template_markup = $('#project-template').html();

  // get the data
  $.getJSON('https://projects.lsvll.io/recent-projects.json', function(posts) {
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
