import Persona from "../models/persona.js"
import bcyptjs from "bcryptjs"

const personaPost=async (req,res)=>{
    const {nombre, apellido,edad,telefono,email,password}=req.body
    const salt =bcyptjs.genSaltSync(10)
    const persona = new Persona({nombre, apellido,edad,telefono,email,password})
    persona.password=bcyptjs.hashSync(password , salt )
    await persona.save()

    res.json({
        msg:"Registro Exitoso"
    })
}

const personaGet=async(req,res)=>{
    const personas=  await  Persona.find()
    res.json({
        personas
    })
}

const personaGetBuscar=async(req,res)=>{
    const {email}=req.query
    const personas=  await  Persona.find({email})
    res.json({
        personas
    })
}


const personaGetLogin=async(req,res)=>{
    let {email,password}=req.query
    const persona=  await  Persona.findOne({email})

    // password=bcyptjs.hashSync(password,salt)

    bcyptjs.validarPassword=bcyptjs.compareSync(password,persona.password)
    
    if (personas.length>0)
        res.json({"msg":"Bienvenido"})
    else
        res.status(401).json({"msg":"Ud que hace aquí"})
}

const personaDelete=async(req,res)=>{
    const {email}=req.query
    const persona=await Persona.findOneAndDelete({email})
    res.json({"Eliminado":persona})
}

export {personaPost,personaGet,personaGetBuscar,personaGetLogin,personaDelete}