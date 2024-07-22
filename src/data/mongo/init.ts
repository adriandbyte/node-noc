import moongose from "mongoose";

interface ConnectionOptions {
  mongoUrl: string;
  dbName: string;
}

export class MongoDatabase {
  static async connect(options: ConnectionOptions) {
    const { mongoUrl, dbName } = options;
    try {
      await moongose.connect(mongoUrl, { dbName });
      console.log("Connected to mongo database");
    } catch (error) {
      console.log("Error connecting to mongo database", error);
      throw error;
    }
  }
}
