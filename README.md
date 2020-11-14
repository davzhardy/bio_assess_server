## Getting started

Create a local .env file using the .env example replacing:

```
PORT=<yourPort>
DBNAME=<nameForTheGamesDB>
DBURL=<yourLocalMongoDBURL>
```

If you want to use the server with the front-end, aeed the database with the game array and then start the server by running: 

```
npm run test
```

If you have already got a database with a maze you can just run: 

```
npm run start
```

If you want to make changes to the server and amend the code (this will use nodemon):

```
npm run dev
```


Afterwards please run the [frontend client] (https://github.com/davzhardy/bio_assess_client)