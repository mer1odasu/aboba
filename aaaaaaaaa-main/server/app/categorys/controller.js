import {prisma} from "../prisma.js"

export const checkCat = async (req,res)=>{
    const cats = await prisma.category.findMany()
    res.json(cats)
}

export const createCat = async (req,res)=>{
    const {name} = req.body
    const cats = await prisma.category.create({
        data:{
            name: name
        }
    })
    res.json({message:"created"})
}

export const deleteCat = async (req,res)=>{
    const id = +req.params.id
    const cat = await prisma.category.delete({
        where:{
            id:id
        }
    })
    res.json({message:"deleted"})
}

export const updateCat = async (req,res)=>{
    const id = +req.params.id
    const {name} = req.body
    const cat = await prisma.category.update({
        where:{
            id:id
        },
        data:{
            name:name
        }
    })
}