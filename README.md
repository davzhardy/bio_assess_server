## Getting started

Create a local .env file using the .env example replacing:

```
PORT=<yourPort>
DBNAME=<nameForTheGamesDB>
DBURL=<yourLocalMongoDBURL>
```

Seed the database with the game array and then start the server by running 

```
npm run dev
```

If you have already got a database with a maze you can just run 

```
npm run start
```


Afterwards please run the [frontend client] (https://github.com/davzhardy/bio_assess_client)