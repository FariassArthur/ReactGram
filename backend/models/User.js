const mongoose = require("mongoose");
const {Schema} = mongoose; //esqueleto do model
/**
 * Model é o objeto que possui os métodos
 * E esse model funciona baseado em um Schema (Esquema)
 */

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    profileImage: String,
    bio: String,
},
    {
        //configurações do model
        timestamps: true
    }
);

const User = mongoose.model("user", userSchema);

module.exports = User;