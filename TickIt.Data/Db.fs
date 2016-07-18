namespace TickIt.Data

open System
open System.Data
open System.Data.Linq
open FSharp.Data.TypeProviders

module Db =

    type dbSchema = SqlDataConnection<"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=tickit;Integrated Security=True">

    dbSchema.GetDataContext().DataContext.Log <- System.Console.Out

    let getDbContext() =
        dbSchema.GetDataContext()