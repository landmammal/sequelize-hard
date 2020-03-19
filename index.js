const Sequelize = require("sequelize");

// started a connection to our DB
const sequelize = new Sequelize('sequelize_this', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql' 
});


// define a model for our database
const User = sequelize.define("User", {
    name: Sequelize.STRING ,
    age:  Sequelize.INTEGER
})

// sync our model
User.sync();


// sequelize querys
User.create({
    name: "roger",
    age: 29
}).then(function(result){
    console.log(result);
})

  
