### Static generation.
a method of pre-rendering where the HTML pages are generated at build time.

The HTML with all data that makes up the content of the web page are generated in advance when you build your application.

Page can be built once, cached by a CDN and served to the client almost instantly.

NextJS by default , without any configuration, statically generates every page in our app when we build it for production. This allows the page to be cached by a CDN and indexed by a search engine.