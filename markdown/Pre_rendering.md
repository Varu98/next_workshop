### Types of pre-rendering
1. Static Generation
    - without data
    - with data
    - incremental Static Generation
    - dynammic parameters when fetching data
2. Server-side Rendering
    - data fetching
Client-side data fetching
Combining pre-rendering with client-side data fetching.

### Why Pre-Render
1. Pre-rendering improves performance.
    - In a React app, you need to wait for the JavaScript to be executed.
    - Perhaps fetch data from an external API and then render the UI.
    - There is a wait time for the user.
    - With a pre-rendered page, the HTML is generated and loads faster. 
2. Pre-rendering helps with SEO.
    - If you're building a blog or an e-commerce site , SEO is a concern.
    - With a React app, if the search engine hits your page, it only sees a div tag with id equal to root.
    - If search engine hits a pre-rendered page though, all the content is present in the source code which will help index that page.