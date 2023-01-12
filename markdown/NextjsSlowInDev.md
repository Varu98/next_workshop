# Why does nextjs seem slow in the dev environment.
### understand the difference.
Prod Server - An optimised build is created once and you depoloy that build. you don't make code changes on the gonce it is deployed.

Dev Server - We should be able to make changes in out code and we want that code to immediately relect in the browser.

For Production builds , a page will be pre-rendered once when we run the build command.

In development mode, the page is pre-rendered for every request you make.

