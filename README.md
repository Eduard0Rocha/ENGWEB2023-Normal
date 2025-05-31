# Web Engineering Test - 2023

This repository contains my Web Engineering test project from 2023, including solutions and explanations for the exercises.

---

## Exercise 1

### 1.1 Setup

To import the data into the MongoDB database, the following command was used:

```bash
mongoimport -d plantas -c plantas --file plantas.json --jsonArray
```

To verify if the import was successful, the following commands were used:

```bash
mongosh
use plantas
db.plantas.find()
```
Data persistence is ensured by the database.

### 1.2 Queries

1. **Count all documents:**

```js
db.plantas.countDocuments()
```

*Result:* `29617`

2. **Count documents where "Freguesia" is "São Domingos de Rana":**

```js
db.plantas.countDocuments({"Freguesia":"São Domingos de Rana"})
```

*Result:* `5903`

3. **List distinct "Freguesia" values sorted:**

```js
db.plantas.distinct("Freguesia").sort()
```

*Result:*

```json
[
  "",
  "Abóboda",
  "Alcabideche",
  "São Domingos de Rana",
  "U.F. Carcavelos e Parede",
  "U.F. Cascais e Estoril"
]
```

4. **Count documents grouped by "Freguesia":**

```js
db.plantas.aggregate([
  { $group: { _id: "$Freguesia", total: { $sum: 1 } } }
]);
```

*Result:*

```json
[
  { "_id": "", "total": 26 },
  { "_id": "Abóboda", "total": 2 },
  { "_id": "Alcabideche", "total": 4034 },
  { "_id": "São Domingos de Rana", "total": 5903 },
  { "_id": "U.F. Cascais e Estoril", "total": 12023 },
  { "_id": "U.F. Carcavelos e Parede", "total": 7629 }
]
```

5. **Count documents grouped by "Espécie":**

```js
db.plantas.aggregate([
  { $group: { _id: "$Espécie", total: { $sum: 1 } } }
]);
```

*Result (excerpt):*

```json
[
  { "_id": "araucaria do chile", "total": 46 },
  { "_id": "zelha", "total": 8 },
  { "_id": "aroeira vermelha", "total": 17 },
  { "_id": "borracheira", "total": 93 },
  { "_id": "sophora pyramidalis", "total": 19 },
  { "_id": "sobreiro", "total": 21 },
  { "_id": "bambu", "total": 1 },
  { "_id": "amieiro", "total": 35 },
  { "_id": "abacateiro", "total": 25 },
  { "_id": "chorisia", "total": 13 }
  // ... more species
]
```

---

### 1.3 and 2 Setup

For Exercise 1, the setup commands were:

```bash
npx express-generator --view=pug
npm install
npm audit fix --force
npm audit fix --force
npm install mongoose
```

To start the project:

```bash
npm start
```

To test the queries, the **Thunder Client** extension in VSCode was used.

For Exercise 2, the setup was similar but without `mongoose` and with the addition of:

```bash
npm install axios
```

---

### Running the Applications

1. **Run the API in the `ex1` folder:**

```bash
npm install
npm start
```

2. **Then run the Interface in the `ex2` folder:**

```bash
npm install
npm start
```

