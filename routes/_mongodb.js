const MongoClient = require("mongodb").MongoClient;
const url = process.env.MONGODB_URI;

let dbo;

module.exports = {
  connectDb: (callback) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
      dbo = db.db("data_portfolio");
      return callback(err);
    });
  },

  getDb: () => {
    return dbo;
  },

  closeDb: () => {
    return dbo.close();
  },
};
