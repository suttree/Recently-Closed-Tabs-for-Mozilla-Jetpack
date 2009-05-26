/* Recent closed tab history - showing favicons in the status bar */
/* Duncan Gough - http://suttree.com */
var favIcons = new Array(5);
var statusBar = null;

jetpack.tabs.onClose(function(){
  addFavicon(this);
});

function addFavicon(tab){
  var img = '<img src="' + tab.favicon + '" height="16" width="16">';
  if (favIcons.push(img) > 5) {
    favIcons = favIcons.splice(1,5);
  }
  statusBar.html( favIcons.join(' ') );
}

jetpack.statusBar.append({ 
  html: '<span id="favicons"></span>', 
  onReady: function(doc){ 
    statusBar = $(doc).find("#favicons");
    $(doc).click(function(){
      console.log( favicons.join(' ') );
    });
  }, 
  width: 200 
});