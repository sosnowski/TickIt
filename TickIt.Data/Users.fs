namespace TickIt.Data

open System
open System.Data
open System.Data.Linq
open FSharp.Data.TypeProviders
open FSharp.Linq
open FSharp.Linq.NullableOperators

module Users =

    type User = {
        id: int;
        name: string;
        email: string;
        dateCreated: DateTime;
        dateUpdated: DateTime;
    }

    type UserRegister = {
        name: string;
        email: string;
        password: string;
    }

    let rowToUser (row:Db.dbSchema.ServiceTypes.Users) =
        {
            id = row.Id;
            name = row.Name;
            email = row.Email;
            dateCreated = row.DateCreated;
            dateUpdated = row.DateUpdated;
        }


    let getById userId =
        let db = Db.getDbContext()

        let queryData = query {
            for userRow in db.Users do
            where (userRow.Id = userId)
            select userRow 
            exactlyOne
        }
        queryData |> rowToUser

    let getByLogin email =
        let db = Db.getDbContext()
        let queryData = query {
            for userRow in db.Users do
            where (userRow.Email = email)
            select userRow
            exactlyOneOrDefault
        }
        if queryData <> null then
            Some (rowToUser queryData)
        else
            None

    let getByLoginAndPass email pass =
        let db = Db.getDbContext()
        let queryData = query {
            for userRow in db.Users do
            where (userRow.Email = email && userRow.Password = pass)
            select userRow
            exactlyOneOrDefault
        }
        if queryData <> null then
            Some (rowToUser queryData)
        else
            None

    let registerUser userData =
        let db = Db.getDbContext()
        let record = new Db.dbSchema.ServiceTypes.Users( Name = userData.name, Email = userData.email, Password = userData.password, DateCreated = DateTime.Now, DateUpdated = DateTime.Now )
        db.Users.InsertOnSubmit(record)
        try
            db.DataContext.SubmitChanges()
        with
        | e -> printfn "Exception:\n%s" e.Message
        record |> rowToUser
