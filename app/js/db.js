import Datastore from 'nedb'

const db = {
  empresas: new Datastore({ filename: './db/empresas.db', autoload: true })
}

module.exports = db