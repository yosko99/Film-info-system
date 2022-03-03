# Film info system

This project is using RENS stack (React, Express, Node, MySQL).
Purpose of this project is to exercise with the database and learn React features.

# Instructions

After cloning the repository you first need to change the directory to backend and install the necessary npm packages

```
cd backend
npm install
```

After you are done with that, go to frontend directory and install the necessary npm packages

```
cd ..
cd frontend
npm install
```

Finally you can go back to the main directory and install needed npm packages for running both server side and frontend side at one time. After you are done with that you can start the project.

```
cd ..
npm install
npm run dev
```

## Database instructions

This projects uses MySQL as DB, so to run it you will need to install any software like `XAMPP`, after setting it up you can take all the data files stored in backend/data and put them in `phpmyadmin`.

## Environment variables instructions

You will need to create `.env` file in the main directory, follow `.env.example` variables as an example and fill them with your own data.

## Running the project

After everything is set, next time if you want to start the project all you need to do is run this command `npm run dev` from the main directory which will start server side and back side at one time.

You can start them independently with the following command.

```
npm run server - start server side
npm run client - start frontend side
```

# Routing

For backend currently this is the setup i am using.

![routing](https://user-images.githubusercontent.com/80975936/156515571-171e0ee3-b649-4f0d-922a-cecc5df5ffa3.png)

## Film routing

```
GET - /api/film/          # Get all available films
POST - /api/film/         # Recieves data and creates new film in the DB
GET - /api/film/:id       # Get single film with provided film ID
PUT - /api/film/          # Recieves data and then updates the provided film
DELETE - /api/film/:id    # Deletes a film with provided film ID
```

## Cinema routing

```
GET - /api/cinema/          # Get all available cinemas
POST - /api/cinema/         # Recieves data and creates new cinema in the DB
GET - /api/cinema/:id       # Get single cinema with provided cinema ID
PUT - /api/cinema/          # Recieves data and then updates the provided cinema
DELETE - /api/cinema/:id    # Deletes a cinema with provided cinema ID
```

## Project routing

```
GET - /api/cinema/          # Get all available project dates
POST - /api/cinema/         # Recieves data and creates new project date in the DB
```
