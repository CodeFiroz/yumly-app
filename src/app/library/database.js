// ** CREATING A DATABASE CONNECTION FILE ** //

const {MONGODBUSER, MONGODBPASSWORD, MONGODBDATABASE, MONGODBCLUSTOR} = process.env;
// fetching environment variables from .env files

export const connectionSTR = "mongodb+srv://"+MONGODBUSER+":"+MONGODBPASSWORD+"@cluster0.daiyz.mongodb.net/"+MONGODBDATABASE+"?retryWrites=true&w=majority&appName="+MONGODBCLUSTOR;

// creating a connectURI from the help of mongodb atlas