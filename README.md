## Getting started

Create a local .env file using the .env example replacing:

```
PORT=<yourPort>
DBNAME=<nameForTheGamesDB>
DBURL=<yourLocalMongoDBURL>
```

Seed the database with the game array by running a POST request to via POSTMAN: localhost:PORT/maze
(replace PORT to be consistent with your .env file).

You can find the body of the post below (or in the postman-format.json file):

{
  "layout":[
    ["-", "-", "-", "O", "-", "-", "-", "-", "-", "O"], 
    ["-", "O", "-", "-", "-", "O", "-", "D", "-", "-"], 
    ["-", "-", "-", "-", "O", "-", "-", "O", "-", "-"], 
    ["-", "O", "-", "O", "-", "-", "-", "-", "-", "-"], 
    ["-", "-", "-", "-", "-", "O", "-", "O", "-", "-"], 
    ["F", "-", "-", "O", "-", "-", "-", "-", "-", "O"], 
    ["-", "-", "O", "-", "-", "-", "-", "-", "-", "-"], 
    ["-", "-", "-", "-", "-", "-", "-", "O", "-", "-"], 
    ["-", "O", "-", "-", "O", "O", "-", "-", "-", "-"], 
    ["-", "-", "-", "-", "-", "-", "-", "-", "O", "-"]
  ],
  "index": 0
}

Afterwards please run the [frontend client] (https://github.com/davzhardy/bio_assess_client)