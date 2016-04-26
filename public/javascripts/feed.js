google.load("feeds", "1");

function initialize() {
  var feed = new google.feeds.Feed("http://52.33.243.157/blog/rss");
  feed.setNumEntries(6)
  feed.includeHistoricalEntries();
  feed.load(function(result) {
    if (!result.error) {
      var container = $('#feed');
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i],
        image = entry.mediaGroups,
        imageUrl = '';
        if (image != undefined) {
          imageUrl = image[0].contents[0].url;
        } else {
          imageUrl = 'https://s3-us-west-2.amazonaws.com/turnblog/assets/blog-missing.jpg';
        }
        console.log(entry);
        $('.post-'+i).css('background-image', 'url('+imageUrl+')')
        $('#post-'+i).attr('href',entry.link);
        $('.post-'+i+' .title').append('<span class="table">'+entry.title+'</span>')
      }
    }
  });
}
google.setOnLoadCallback(initialize);