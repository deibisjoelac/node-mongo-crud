const db = require('mongoose');
db.Promise = global.Promise;
//'mongodb://localhost:27017/platzi?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
async function connect(url){
    await db.connect(url,{
        useNewUrlParser: true,
    });
    console.log('[DB CONECTED]');
}

module.exports = connect;