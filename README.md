# BERNMOBIL-Challenge Team aldente! am BärnHäckt 2018

> Mir bringä Bärn Mobil ufs nächschti Level

> Geolocation-basierte Gamification der BERNMOBIL-Leitdaten

## Projektinformationen

In diesem Repo findet sich nur das Backend der App. Das Frontend ist in [seiner eigenen Repository](https://github.com/Buffalom/bernhackt2018-aldente).


## Local 

``` bash
# install dependencies
npm install

# serve at localhost:8080
npm run dev

# create migration
npm run migration:make

# migrate database
npm run migrate

# rollback migration
npm run migrate:rollback

# seed database
npm run seed

```

## Docker

Build docker image:

```bash
docker build -t aldente-backend .
```

Run docker image:

```bash
docker run -p 3000:3000 aldente-backend
```