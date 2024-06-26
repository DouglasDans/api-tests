import { createAutor, findAllAutor } from "@/app/service/autorService"
import { NextRequest, NextResponse } from "next/server"
import { HTTPResponse } from "../HTTPResponse"
import { createEditora, findAllEditora } from "@/app/service/editoraService"

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(req : NextRequest){
   const editora = await findAllEditora().catch(e => {
      const httpResponse = new HTTPResponse(e, "500", req.url)
      return httpResponse.toString()
   })
   return new NextResponse(JSON.stringify(editora))
}

export async function POST(req: NextRequest){
   const requestObj = await req.json()
   const editora = await createEditora(requestObj)
   return new NextResponse(JSON.stringify(editora))
}