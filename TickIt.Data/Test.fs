module Test

//open System
//open System.Data
//open System.Data.Linq
//open FSharp.Data.TypeProviders
//open FSharp.Linq
//open FSharp.Linq.NullableOperators
//
//type User = {
//    id: int;
//    name: string;
//    lastName: string;
//    age: int option;
//    updated: DateTime;
//}
//
//type Category = {
//    id: int;
//    name: string;
//    userId: int;
//    color: string;
//}
//
//type dbSchema = SqlDataConnection<"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=TestDB;Integrated Security=True">
//
//let db = dbSchema.GetDataContext()
//// Enable the logging of database activity to the console.
//db.DataContext.Log <- System.Console.Out
//
//let nullToOption (value:System.Nullable<_>) =
//    if value.HasValue then
//        Some value.Value
//    else
//        None
//
//let mapToUser (row:dbSchema.ServiceTypes.Users) =
//    {
//        id = row.Id;
//        name = row.Name;
//        lastName = row.LastName;
//        age = nullToOption row.Age;
//        updated = row.Updated
//    }
//
//let mapToCategory (row: dbSchema.ServiceTypes.Categories) =
//    {
//        id = row.Id;
//        name = row.Name;
//        color = row.Color;
//        userId = row.UserId;
//    }
//
//let getUsers = 
//    let queryData = query {
//        for row in db.Users do
//        where (row.Age ?> 20)
//        select row
//    }
//    queryData |> Seq.map (mapToUser)
//
//let getCategories userName =
//    let queryData = query {
//        for categoryRow in db.Categories do
//        join userRow in db.Users on (categoryRow.UserId = userRow.Id)
//        where (userRow.Name = userName)
//        select categoryRow
//    }
//    queryData |> Seq.map (mapToCategory)
//
//let addCategories userId howMany =
//    let categories = [ 
//        for i in 1..howMany -> 
//            dbSchema.ServiceTypes.Categories(Name = "Category U:" + userId.ToString() + " " + i.ToString(), UserId = userId, Color = "default")
//        ]
//    db.Categories.InsertAllOnSubmit categories
//    try
//        db.DataContext.SubmitChanges()
//    with
//    | e -> printfn "Data save error: %s" e.Message
//
//let getOneUser id =
//    let queryData = query {
//        for row in db.Users do
//        where (row.Id = id)
//        select row
//        exactlyOneOrDefault 
//    }
//    if queryData <> null then
//        Some (mapToUser queryData)
//    else
//        None
