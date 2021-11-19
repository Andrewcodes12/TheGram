# create user and db in psql:
    CREATE USER thegram WITH PASSWORD 'abc123' CREATEDB;

    CREATE DATABASE thegram_db WITH OWNER thegram;


# in root directory, run this in terminal:
    pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt


# create a .env file and add this:
    FLASK_APP=app
    FLASK_ENV=development
    SECRET_KEY=77D28DC99A3474920AFDF2FAC094D298
    DATABASE_URL=postgresql://thegram:abc123@localhost/thegram_db


# Get into your pipenv shell, migrate your database, seed your database, and run your flask app

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




# cd into react-app folder and run:
    npm install
    npm start


- You should be able to see login prompt at localhost:3000 now (npm start should take you there automatically)
