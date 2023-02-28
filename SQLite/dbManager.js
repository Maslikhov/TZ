import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Configuration } from './configuration';
import { exp } from 'react-native-reanimated';

export const checkEsistenceDB = async dbName => {
  const dbDir = FileSystem.documentDirectory + 'SqLite/'
  const dirInfo = await FileSystem.getInfoAsync(dbDir + dbName)
  if(!dirInfo.exists) return false
  else return true
}


export async function createDatabase(dbName){

  const db = SQLite.openDatabase(dbName)
  db.transaction(tx=>{
    tx.executeSql(`
      CREATE TABLE "mytest"
      (
        "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        "question" TEXT
      )
      
    `)
  }), error => console.log(`create error : ${error}`);
}


export async function select(dbName){

  const db =  SQLite.openDatabase(dbName)
  db.transaction(tx=>{
    tx.executeSql(
      `SELECT * FROM mytest `,
      [],
      ({rows}) => {
        console.log(JSON.stringify(rows));
      })
    }), error => console.log(`create error : ${error}`);
  }

  export async function insertInfo(dbName, question="",answer=""){
    const dirInfo = await checkEsistenceDB(dbName)
    if(!dirInfo) await createDatabase(dbName)

    const db = SQLite.openDatabase(dbName)
    db.transaction(tx =>{
      tx.executeSql(`
      INSERT INTO mytest (question,answer)
      values ('${question}','${answer}')
      `)
    }), error => console.log(`create error : ${error}`);
  }

  export async function updateData(dbName, id, question="", answer="" ){
    const db = SQLite.openDatabase(dbName)
    db.transaction(tx=>{
      tx.executeSql(`
      UPDATE mytest SET question = "${question}", answer ="${answer}"
      WHERE id = "${id}"
      `)
    }), error => console.log(`create error : ${error}`);
  }


  export async function deleteDB(dbName){
    const dbDir = FileSystem.documentDirectory + 'SQLite/'
    const dirInfo = await FileSystem.getInfoAsync(dbDir + dbName)
    if (dirInfo.exists) await FileSystem.deleteAsync(dbDir + dbName , {idempotent: true })

    console.log(' table deleted')
  }