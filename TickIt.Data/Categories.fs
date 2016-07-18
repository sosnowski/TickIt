namespace TickIt.Data

open System
open System.Data
open System.Data.Linq
open FSharp.Data.TypeProviders
open FSharp.Linq
open FSharp.Linq.NullableOperators

module Categories =

    type Category = {
        id: int;
        userId: int;
        name: string;
        color: string;
        order: int;
    }

    let rowToCategory (row:Db.dbSchema.ServiceTypes.Categories) =
        {
            id = row.Id;
            userId = row.UserId;
            name = row.Name;
            color = row.Color;
            order = row.Order;
        }

    let getByUser userId =
        let db = Db.getDbContext()
        let queryData = query {
            for catRow in db.Categories do
            where (catRow.UserId = userId)
            sortBy catRow.Order
            select catRow
        }
        queryData |> Seq.map (rowToCategory)