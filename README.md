# Project01_GlobalAPI


## Goal:
- Create a single page responsive web app that lets users Read & Submit reviews of AIDS medication that are currently available.
- User enters web app.
- User is able to see the list of medications.
- User can click on a single medication & modal pops up.
- Hidden reviews show up.


### Pre-work tasks:
- Create project01 github Repository
- Create corresponding Heroku page: https://github.com/SF-WDI-LABS/shared_modules/blob/master/how-to/heroku-mean-stack-deploy.md
- 'npm init' & 'npm install' & 'npm install mongoose'
- Heroku: "git push heroku master", "heroku run bash--> node seed.js", "heroku open", "heroku logs".


### Tasks:
- Sprint 1: User enters page url and sees the main page displaying medications.
- Sprint 2: User clicks on either Read or Write popup icon.
- Sprint 3: add mongo embedded medication reviews data.
- Sprint 4: User can see all the reviews of a single medication in the review-modal popup.
- Sprint 5: User can write & submit a new review inside Write-modal.
- Sprint 6: User can delete a single review.
- Sprint 7: User can update a review inside the review-modal once "update" button is clicked.

### Technologies used:
    **Front-end**
      - Wireframes
      - HTML
      - CSS
      - JAVASCRIPT
      - jQuery
      - Postman (GET data from an externalAPI) & cURL manual commands for HTTP methods
      - ajax
      - Handlebars
      - Bootstrap

    **Back-end**
      - JAVASCRIPT
      - node.js
      - Express controllers

    **Database**    
      - mongoDB
      - mongoose models


#### Heroku url:
https://medreviewapp.herokuapp.com/ | https://git.heroku.com/medreviewapp.git

#### GitHub Repository:
https://github.com/jha-ayush/Project01_GlobalAPI

#### API used:  
GET http://aidsinfo.nih.gov/api/drugs
