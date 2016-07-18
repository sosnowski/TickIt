namespace TickIt.Controllers

open System
open System.Collections.Generic
open System.Linq
open System.Net.Http
open System.Web.Http
open TickIt.Data;

type LoginData = { email: string; password: string; }


/// Retrieves values.
type UsersController() =
    inherit ApiController()

    /// Gets one user data
    [<Route("api/users/{id}")>]
    member x.Get(id:int) = 
        failwith "Not implemented"

    //login user
    [<Route("api/users/login")>]
    [<HttpPost>]
    member x.Login([<FromBody>] loginData:LoginData) =
        let user = Users.getByLoginData loginData.email (Auth.hashPassword loginData.password loginData.email)
        match user with
        | Some u -> x.Ok(u)
        | None -> raise (new HttpResponseException(System.Net.HttpStatusCode.Unauthorized))

    //register user
    [<Route("api/users")>]
    member x.Post([<FromBody>] userData:Users.UserRegister) = 
        let data = {userData with password = (Auth.hashPassword userData.password userData.email) }
        let record = Users.registerUser data
        x.Created("", record)
