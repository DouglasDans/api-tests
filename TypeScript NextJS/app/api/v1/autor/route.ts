import { createAutor, findAllAutor } from "@/app/service/autorService"
import { log } from "console"
import { NextRequest, NextResponse } from "next/server"
import { HTTPResponse } from "../HTTPResponse"

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(req : NextRequest){
   const autores = await findAllAutor().catch(e => {
      const httpResponse = new HTTPResponse(e, "500", req.url)
      return httpResponse.toString()
   })
   return new NextResponse(JSON.stringify(autores))
}

export async function POST(req: NextRequest){
   const requestObj = await req.json()
   const autor = await createAutor(requestObj)
   return new NextResponse(JSON.stringify(autor))
}