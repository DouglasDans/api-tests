
export class HTTPResponse {
   timestamp : number = Date.now()
   httpStatus : string
   message : string
   path : string
   
   constructor(message : string, httpStatus : string, path : string){
      this.message = message
      this.httpStatus = httpStatus
      this.path = path
   }

   toString(){
      return {
         timestamp : this.timestamp,
         httpStatus: this.httpStatus,
         message : this.message,
         path: this.path
      }
   }
}