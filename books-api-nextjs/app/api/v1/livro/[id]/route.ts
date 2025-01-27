import { deleteAutor, findAutorById, updateAutor } from "@/app/service/autorService"
import { NextResponse } from "next/server";
import { HTTPResponse } from "../../HTTPResponse";
import { deleteEditora, findEditoraById, updateEditora } from "@/app/service/editoraService";
import { deleteLivro, findLivroById, updateLivro } from "@/app/service/livroService";

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET( req: Request, { params }: { params: { id: string } }) {
  const livro = await findLivroById(parseInt(params.id)).catch(e => {
    const httpResponse = new HTTPResponse(e.message, "500", req.url)
    return httpResponse.toString()
 })
  return new NextResponse(JSON.stringify(livro))
}

export async function PATCH( req: Request ) {
  const requestObj = await req.json()
  const editora = await updateLivro(requestObj).catch(e => {
    const httpResponse = new HTTPResponse(e.message, "500", req.url)
    return httpResponse.toString()
 })
  
  return new NextResponse(JSON.stringify(editora))
}

export async function DELETE( request: Request, { params }: { params: { id: string } }) {
  return new Response(JSON.stringify(deleteLivro(parseInt(params.id))))
}