
/// here I  define and export my DB Varibles


module.exports = {
    database: process.env.CONNECTION_STRING || 'mongodb://localhost:27017/tenant',
    secret: 'secret'
}
