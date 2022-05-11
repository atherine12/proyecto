import mongoose from "mongoose";

const PersonaSchema= new mongoose.Schema({
    nombre:{type:String,maxlength:25,required:true},
    apellido:{type:String,maxlength:25,required:true},
    edad:{type:Number,default:0},
    telefono:{type:String, maxlength:10},
    email:{type:String,required:true,unique:type},
    password:{type:String, required:true,minlength:6},
    createAt:{type:Date,default:Date.now()}
})

export default mongoose.model("Persona",PersonaSchema)