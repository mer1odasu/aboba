import {prisma} from "../prisma.js"

export const checkAuthor = async(req, res)=>{
    const author = await prisma.author.findMany()
    res.json(author)
}

export const createAuthor = async(req, res)=>{
    const {firstName, lastName} = req.body
    const author = await prisma.author.create({
      data: {
        firstName,
        lastName
      },
      })

    res.json({message:"created"})
}

export const deleteAuthor = async(req, res)=>{
  const id = +req.params.id
  const author = await prisma.author.delete({
    where: { id: id },
    })

  res.json({message:"deleted"})
}

export const updateAuthor = async(req, res)=>{
  const id = +req.params.id
  const {firstName, lastName} = req.body
  const author = await prisma.author.update({
    where: { id: id},
   		data: { firstName:firstName,
        lastName: lastName },
    })

  res.json({message:"updated"})
}