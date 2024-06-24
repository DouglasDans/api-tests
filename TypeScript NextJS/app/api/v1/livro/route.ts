export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request){
   const obj = {
      mensagem: "Olá Mundo"
   }

   return new Response(JSON.stringify(obj))
}