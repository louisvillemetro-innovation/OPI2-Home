require 'feedjira'
module Jekyll
  class MeetupPostDisplay < Generator
    safe true
    priority :high
def generate(site)
      jekyll_coll = Jekyll::Collection.new(site, 'events')
      site.collections['_events'] = jekyll_coll
Feedjira::Feed.fetch_and_parse("https://www.meetup.com/Louisville-Civic-Data-Alliance/events/rss/").entries.each do |e|
        p "#{e.title}, published on Meetup #{e.url} #{e}"
        title = e[:title]
        content = e[:description]
        guid = e[:guid isPermalink]
        pubdata = e[:pubDate]
        path = "./_events/" + title + ".md"
        path = site.in_source_dir(path)
        doc = Jekyll::Document.new(path, { :site => site, :collection => jekyll_coll })
        doc.data['title'] = title;
        doc.data['feed_content'] = content;
        jekyll_coll.docs << doc
      end
    end
  end
end
