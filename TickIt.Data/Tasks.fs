namespace TickIt.Data

open System
open System.Data
open System.Data.Linq
open FSharp.Data.TypeProviders
open FSharp.Linq
open FSharp.Linq.NullableOperators

module Tasks =

    type Task = {
        id: int;
        categoryId: int;
        title: string;
        content: string;
        important: bool;
        status: int;
        order: int;
        dateTo: System.DateTime option;
        dateUpdated: DateTime;
        dateCreated: DateTime;
    }

    let rowToTask (row:Db.dbSchema.ServiceTypes.Tasks) =
        {
            id = row.Id;
            categoryId = row.CategoryId;
            title = row.Title;
            content = row.Content;
            important = row.Important;
            status = row.Status;
            order = row.Order;
            dateTo = Helpers.nullToOption row.DateTo;
            dateUpdated = row.DateUpdated;
            dateCreated = row.DateCreated;
        }

    let getByCategory categoryId =
        let db = Db.getDbContext()
        let queryData = query {
            for taskRow in db.Tasks do
            where (taskRow.CategoryId = categoryId)
            sortBy taskRow.Order
            select taskRow
        }
        queryData |> Seq.map rowToTask

    let getByUser userId =
        let db = Db.getDbContext()
        let queryData = query {
            for taskRow in db.Tasks do
            join categoryRow in db.Categories on (taskRow.CategoryId = categoryRow.Id)
            where (categoryRow.UserId = userId)
            sortBy taskRow.Order
            select taskRow
        }
        queryData |> Seq.map rowToTask