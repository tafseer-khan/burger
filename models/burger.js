const orm = require("../config/orm")

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burger",(res) =>{
            cb(res);
        });
    },
    insertOne: (column,value,cb) => {
        orm.insertOne("burger", column, value,(res) =>{
            cb(res);
        });
    },
    updateOne: function (burgerId, cb) {
        orm.updateOne("burger", "devoured", burgerId,(res) =>{
          cb(res);
        });
      }
};

module.exports = burger;
