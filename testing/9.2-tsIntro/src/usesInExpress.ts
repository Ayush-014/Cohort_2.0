// 2. importing and exporting module (same as in react)
// import express from "express"   // better 
// const express = require("express")

// export const a = 1 // better
// module.exports = {
//     a:1
// }

// 1. use of enum in Express
// const app = Express()

// enum ResponseStatus {
//     Sucess = 200,
//     NotFound = 404,
//     Error = 500
// }

// app.get('/', (req,res) => {
//     if(!req.query.userId) {
//         res.status(ResponseStatus.NotFound).json({})
//     }

//     res.json({});
// })

// app.get('/123', (req,res) => {
//     if(!req.query.userId) {
//         res.status(ResponseStatus.NotFound).json({})
//     }

//     res.json({});
// })