import {prisma} from "../prisma.js"

export const checkBooks = async (req,res)=>{
    const books = await prisma.book.findMany()
    res.json(books)
}

export const createBooks = async (req,res)=>{
    const {title, publicationYear, authorId} = req.body
    const books = await prisma.book.create({
        data:{
            title, 
            publicationYear, 
            authorId
        }
    })
    res.json({message:"created"})
}

export const deleteBooks = async (req,res)=>{
    const id = +req.params.id
    const books = await prisma.book.delete({
        where:{
            id:id
        }
    })
    res.json({message:"deleted"})
}

export const updateBooks = async (req,res)=>{
    const id = +req.params.id
    const {title, publicationYear, authorId} = req.body
    const books = await prisma.book.update({
        where:{
            id:id
        },
        data:{
            title:title,
            publicationYear:publicationYear,
            authorId: authorId
        }
    })
    res.json({message:"updated"})
}
