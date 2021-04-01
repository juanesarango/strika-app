const admin = require('firebase-admin')

const serviceAccount = require('./strika-app-309205-3fbf921c5d9b.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

const db = admin.firestore()

const createRecord1 = async function () {
  const docRef = db.collection('users').doc('alovelace')
  await docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815,
  })
}

const createRecord2 = async function () {
  const aTuringRef = db.collection('users').doc('aturing')
  await aTuringRef.set({
    first: 'Alan',
    middle: 'Mathison',
    last: 'Turing',
    born: 1912,
  })
}

createRecord1()
createRecord2()
