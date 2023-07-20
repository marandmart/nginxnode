# Full Cycle Node/MySQL/NGINX Challenge

Challenge for the Full Cycle course to build a docker-compose file that creates and reverse proxy and connects a nodeJS application container to a MySQL server.

# How to run

* Install dependencies inside the node folder.
* Run docker-compose.yml file using the command: 

```
docker-compose up -d --build
```

# How to use

* Go to http://localhost:8080 in your prefered web browser.
* To add names to the database go to url http://localhost:8080/add/:name. Replace :name with the name you want to add.
* To see names inside the database, after running the docker-compose up command, run commands:
 
    ```    
    docker exec -it mysql bash
    ```
    ```
    mysql -u root -p
    ```
    
    Inside the MySQL CLI:
    ```
    use people;
    select * from people;
    ``` 
