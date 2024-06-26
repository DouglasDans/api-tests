import { Autor, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function findAllAutor() {
   const allAutor = await prisma.autor.findMany()
   console.log(allAutor);
   return allAutor
}

export async function findAutorById(id : number) {
   return await prisma.autor.findFirstOrThrow({
      where: {id : id}
   })   
}

export async function createAutor(obj : Autor) {
   return await prisma.autor.create({
      data: obj
   })
}

export async function updateAutor(obj : Autor){
   return await prisma.autor.update({
      where:{
         id: obj.id
      },
      data: obj
   })
}

export async function deleteAutor(id : number){
   return await prisma.autor.delete({
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
