const express = require('express')
const router = express.Router()
const Tenant = require('../models/tenant')



////// gets all tenants from the DB and send it to the client

router.get('/getTenants', (req,res)=>{
    Tenant.find({}, (err, treatments) =>{
        res.json(treatments)
    })
})


/////// gets a single Tenant by his Id the send it back to the client

router.get('/getTenant', (req,res)=>{
    Tenant.find({_id:req.headers.tenantid }, (err, tenant) =>{
        res.json(tenant[0])
    })
})



///// adds a new Teanant to the DB then sends it back to the client

router.post('/addTenant', (req,res)=>{
        let tenant = new Tenant(
            {
                name: req.body.name,
                address: req.body.address,
                phone: req.body.phone,
                debt : req.body.debt
            }
        )

        tenant.save((err, tenant)=>{
                res.json(tenant)
            })

       
})


/////// find a Tenant then edits it and semds it back to the client


router.put('/editTenant', (req,res)=>{
   Tenant.findByIdAndUpdate(req.body._id, req.body, (err,tenant)=>{
      res.json(req.body)
   })
})

/////// find a Tenant then delete its and updates the client


router.delete('/deleteTenant', (req,res)=>{
    Tenant.findByIdAndRemove(req.headers.id, (err, tenant) =>{
        res.json("Done")
    })  
})






module.exports  = router