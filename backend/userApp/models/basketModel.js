const mongoose = require('../../shared/db').mongoose;
const Schema = mongoose.Schema

//modele pour les notificaitons
//
const basketSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{
                product : { type: Schema.Types.ObjectId, ref: 'Product', required: true },
                createdAt : { type : Date, default : Date.now() },
                updatedAt : { type : Date, default : Date.now() },
            }],
    
    createdAt : { type : Date, default : Date.now() },
    updatedAt : { type : Date, default : Date.now() },
});

module.exports = mongoose.model('Basket', basketSchema);
