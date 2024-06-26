import { Autor, Livro, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function findAllLivro() {
   const allLivro = await prisma.livro.findMany()
   return allLivro
}

export async function findLivroById(id : number) {
   return await prisma.livro.findFirstOrThrow({
      where: {id : id}
   })   
}

export async function createLivro(obj : Livro) {
   return await prisma.livro.create({
      data: obj
   })
}

export async function updateLivro(obj : Livro){
   return await prisma.livro.update({
      where:{
         id: obj.id
      },
      data: obj
   })
}

export async function deleteLivro(id : number){
   return await prisma.livro.delete({
      where: {
         id: id
      }
   }).catch(e => {
      return {
         message: "Ocorreu um erro",
         error: e
      }
   })
}
