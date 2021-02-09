const connection = require("./connection");

const orm = {
    selectAll: (table, cb) => {
        connection.query("SELECT * FROM "+table, (err,result) =>{
            if(err) throw err;
            cb(result);
        })
    },
    insertOne: (table,column,value,cb) => {
        connection.query("INSERT INTO ?? (??) VALUES (?)",[table,column,value], (err,res) => {
            if(err) throw err;
            cb(res)
        })
    },
    updateOne: (table,column,burgerId,cb) => {
        connection.query("UPDATE ?? SET ?? = 1 WHERE id =?",[table,column,burgerId], (err,res) => {
            if (err) throw err;
            cb(res);
        })
    }
}

module.exports = orm;
