namespace TickIt.Controllers

open System
open System.Collections.Generic
open System.Linq
open System.Net.Http
open System.Web.Http
open System.Web.Http.Cors
open TickIt.Data;

type LoginData = { email: string; password: string; }


/// Retrieves values.
type UsersController() =
    inherit ApiController()

    /// Gets one user data
    [<Route("api/users/{id}")>]
    member x.Get(id:int) = 
        x.Ok("User data")

    //login user
    
    [<Route("api/users/login")>]
    [<HttpPost>]
    member x.Login(loginData:LoginData) =
        let hash = Auth.hashPassword loginData.password loginData.email
        let user = Users.getByLoginAndPass loginData.email hash
        match user with
        | Some u -> x.Ok(u)
        | None -> raise (new HttpResponseException(System.Net.HttpStatusCode.Unauthorized))

    //register user
    [<Route("api/users")>]
    member x.Post([<FromBody>] userData:Users.UserRegister) = 
        let hashedPassword = Auth.hashPassword userData.password userData.email
        let existingUser = Users.getByLogin userData.email
        match existingUser with
        | Some u -> x.Request.CreateErrorResponse(System.Net.HttpStatusCode.BadRequest, "There is already a user with such login")
        | None ->
            let data = {userData with password = hashedPassword }
            let record = Users.registerUser data
            x.Request.CreateResponse(System.Net.HttpStatusCode.Created, record)
        
