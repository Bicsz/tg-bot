import * as bodyParser from "body-parser";
import * as express from "express";
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

admin.initializeApp(functions.config().firebase);

const app = express();
const main = express();

main.use("/api/v1", app);
main.use(bodyParser.json());

export const webApi = functions.https.onRequest(main);

app.get("/warmup", (request, response) => {
  response.send("Warming up friend.");
});
