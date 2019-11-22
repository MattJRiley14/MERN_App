const secrets = {
    // The URL that we use to connect to the MongoDB Atlas Cluster
    dbUrl: 'mongodb+srv://mattjr:mEXlD87GjTfnk1vU@cluster0-in3g9.mongodb.net/test?retryWrites=true&w=majority'    
};

const getSecret = key => secrets[key];

module.exports = getSecret;