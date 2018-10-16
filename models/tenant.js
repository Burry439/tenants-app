const mongoose = require("mongoose");

//// here i define my Schema

const tenantSchema = mongoose.Schema({
   
    name:
    {
        type:String,
        require:true
    },
    address: 
    {
       type:String,
       require: true 
    },
   phone:
    {
        type:String,
        require:true
    },
    debt: 
    {
       type: Number,
       require: true 
    }
})

/// here i export it so it can be imported where its needed

const Tenant = module.exports = mongoose.model("tenant", tenantSchema)
