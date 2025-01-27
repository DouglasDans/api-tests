import { createAutor, findAllAutor } from "@/app/service/autorService"
import { NextRequest, NextResponse } from "next/server"
import { HTTPResponse } from "../HTTPResponse"
import { createEditora, findAllEditora } from "@/app/service/editoraService"
import { createLivro, findAllLivro } from "@/app/service/livroService"

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(req : NextRequest){
   const livro = await findAllLivro().catch(e => {
      const httpResponse = new HTTPResponse(e, "500", req.url)
      return httpResponse.toString()
   })
   return new NextResponse(JSON.stringify(livro))
}

export async function POST(req: NextRequest){
   const requestObj = await req.json()
   const livro = await createLivro(requestObj)
   return new NextResponse(JSON.stringify(livro))
}