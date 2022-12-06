# Back-end Node.js

This project consists of a client (front-end) and a Server (backend). An authentication page was created in it that verifies that it uses encryption to store the password in the bank and also at login the user receives an authentication token that is stored in the LocalStorage of the page. Each account can also have an authenticated user level, with admin being the highest level. This implementation won't advance much further than that, but it's a good base for anyone looking to run a mevn project.

## PS: 

To run the Server, you need to configure the database, passing the access credentials
They are not included in the app for clear reasons... rs


## Technology

### Axios
Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.

