const functions = require("firebase-functions");
const admin = require("firebase-admin");
const algoliasearch = require("algoliasearch");

admin.initializeApp(functions.config().firebase);

const fieldValue = admin.firestore.FieldValue;
const firestore = admin.firestore();
firestore.settings({ timestampsInSnapshots: true });

const ALGOLIA_ID = functions.config().algolia.appid;
const ALGOLIA_ADMIN_KEY = functions.config().algolia.apikey;

const ALGOLIA_INDEX_COMPANIES = "companies";

const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);

exports.onCompanyCreated = functions.firestore
  .document("companies/{companyId}")
  .onCreate((snapshot, context) => {
    // Get the job document
    const company = snapshot.data();

    // Add an 'objectID' field which Algolia requires
    company.objectID = context.params.companyId;

    // Write to the algolia index
    const index = client.initIndex(ALGOLIA_INDEX_COMPANIES);
    return index.saveObject(company);
  });
