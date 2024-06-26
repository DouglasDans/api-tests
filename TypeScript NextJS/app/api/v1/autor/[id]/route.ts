import { deleteAutor, findAutorById, updateAutor } from "@/app/service/autorService"
import { NextResponse } from "next/server";
import { HTTPResponse } from "../../HTTPResponse";

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET( req: Request, { params }: { params: { id: string } }) {
  const autores = await findAutorById(parseInt(params.id)).catch(e => {
    const httpResponse = new HTTPResponse(e.message, "500", req.url)
    return httpResponse.toString()
 })
  return new NextResponse(JSON.stringify(autores))
}

export async function PATCH( req: Request ) {
  const requestObj = await req.json()
  const autor = await updateAutor(requestObj).catch(e => {
    const httpResponse = new HTTPResponse(e.message, "500", req.url)
    return httpResponse.toString()
 })
  
  return new NextResponse(JSON.stringify(autor))
}

export async function DELETE( request: Request, { params }: { params: { id: string } }) {
  return new Response(JSON.stringify(deleteAutor(parseInt(params.id))))
}