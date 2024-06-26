import { Editora, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function findAllEditora() {
   const allAutor = await prisma.editora.findMany()
   return allAutor
}

export async function findEditoraById(id : number) {
   return await prisma.editora.findFirstOrThrow({
      where: {id : id}
   })   
}

export async function createEditora(obj : Editora) {
   return await prisma.editora.create({
      data: obj
   })
}

export async function updateEditora(obj : Editora){
   return await prisma.editora.update({
      where:{
         id: obj.id
      },
      data: obj
   })
}

export async function deleteEditora(id : number){
   return await prisma.editora.delete({
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
