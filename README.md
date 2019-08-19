


  Project structure:
 -
  - frontend: React.js application 
  - middleware: an Apollo middleware that wrap the Rest API
  - cypress: the end to end tests for the app
  

  to start the project, first of all install the dependencies, run the following commands from the root directory:
  - cd frontend && npm i
  - cd middleware && npm i
  - npm i
  
  * to run the tests, from the main directory: npm test
  * to start the project , start the frontend and the middleware:
    - npm run start
    - npm run start-middleware
    
  * to run the E2E test: 
    - on headless mode: npm run e2e
    - on UI mode: npm run e2e:open
   
