const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGOURI);

module.exports = {
  db: null,

  repo: null,

  async connect() {
    await client.connect();
    this.db = client.db(process.env.DBNAME);
    console.log("Connected to DB -", process.env.DBNAME);
    this.repo = this.db.collection(process.env.COLLECTION);
  },
};
