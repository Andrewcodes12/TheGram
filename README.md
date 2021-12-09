# The Gram
The Gram is a fullstack application designed for users to stay in touch with friends by posting photos, liking photos & comments, and commenting on photos. Live link: https://the--gram.herokuapp.com/ Please refer to Wiki pages for documentation.


# Technologies used:
Front-End:
- React
- CSS
- JavaScript
- JSX

State Management:
- Redux

Back-End:
- Flask
- Postgresql
- SQLAlchemy
- Python

This app is deployed using Heroku & Docker.

# Site Features:
- upon arrival of the site you will be greeted by the sites splash page, this will prompt you to Create an account, Log-in as an existing user, or enter as a Demo user.
- You cannot access the site and its features unless you are logged in.
- All features are full CRUD, meaning A user can Create, Read/view, Update/Edit, and Delete.
- POST: A logged-in user will be able to Create their own posts, View/Read posts, Edit/Update the caption of their posts, and Delete their posts.
- To post photos please use image url of the photo you want to upload.
- Likes: A logged-in user will be able to Create likes on posts and comments, View/Read post/comment likes, and Delete their likes from posts/comments.
- Comments: A logged in user will be able to Create comments under posts, View/Read comments under posts, Edit/Update their own comments, and Delete their comments.

# Features to be implemented:
- AWS for storage/uploading of photos
- Follow/Unfollow of users
- User Profile Pages
- Explore Page


# Development
- create user and db in psql:
    CREATE USER thegram WITH PASSWORD 'abc123' CREATEDB;

    CREATE DATABASE thegram_db WITH OWNER thegram;


- in root directory, run this in terminal:
    pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt

- create a .env file and add this:
    FLASK_APP=app
    FLASK_ENV=development
    SECRET_KEY=77D28DC99A3474920AFDF2FAC094D298
    DATABASE_URL=postgresql://thegram:abc123@localhost/thegram_db

- Get into your pipenv shell, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

   heroku run -a {NAME_OF_HEROKU_APP} flask db upgrade

   heroku run -a {NAME_OF_HEROKU_APP} flask seed all




- cd into react-app folder and run:
    npm install
    npm start
