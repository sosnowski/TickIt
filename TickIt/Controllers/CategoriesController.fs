namespace TickIt.Controllers

open System
open System.Collections.Generic
open System.Linq
open System.Net.Http
open System.Web.Http
open TickIt.Data;

/// Retrieves values.
[<RoutePrefix("api/user/{userId}")>]
type CategoriesController() =
    inherit ApiController()

    /// Gets one user data
    [<Route("categories/{id}")>]
    [<HttpGet>]
    member x.Get(id:int) = ()

    [<Route("categories")>]
    [<HttpGet>]
    member x.GetAll(userId:int) =
        let categories = Categories.getByUser userId
        x.Ok(categories)

    [<Route("categories")>]
    [<HttpPost>]
    member x.Create(categoryData) = ()

    [<Route("categories/{id}")>]
    [<HttpPut>]
    member x.Update(id:int, categoryData) = ()