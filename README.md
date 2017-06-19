Requirement to run the project:

	1.	MongoDB 
	2.	NodeJS
	3.	ExpressJS
	4.	Jade

Steps:
1. Assuming that you have already installed MongoDB open the terminal and   run command 'mongod'.

2. Open terminal and go to the directory where the project folder saved and run the following commands 
      1.	'mongoimport --db Webservicedb --collection apicollections ApiJsonFiles.json --jsonArray' and 
      2.	'mongoimport --db Webservicedb --collection Mashupcollection MashupJsonFiles.json --jsonArray'
      3.	npm install nodemon-g
      4.	nodemon bin/www			
3.	Go to web brower and run http://localhost:3000/
4.	Now select the button for api query or mashup query
5.	In the next page for api fill out the requirement i.e select desired(keyword,category,protocol,rating,updated year or tag) for the api to be searched for.
6.	Now click on the ‘select’ button to get the detail information of the API.
7.	Same for Mashup query .Fill out the requirement i.e select desired(keyword,api,year,Tag) for the mashup to be searched for.
8.	Now click on the ‘select’ button to get the detail information of the Mashup.

Note: Data parsing folder contains the python files that are used to parse data in JSON.The parsed JSON files are already stored in the project folder.
		

