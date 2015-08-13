/**
 * Custom JavaScript for your slideshow.
 *
 * This file won't be updated/modified by Trickster once you've
 * created your slideshow.  The main thing you're likely to want to do here is
 * override the configuration of Trickster.
 *
 * This file is loaded after trickster.js, so TricksterDefaultConfig should be in scope
 * and mofifiable.
 */
WebFontConfig = {
  google: { families: [ 'Questrial::latin', 'Anonymous+Pro::latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
