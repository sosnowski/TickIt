module Auth

open System.Security.Cryptography
open System.Text


let hashPassword (pass:string) (salt:string) = 
    let inputBytes = Encoding.UTF8.GetBytes(pass + salt)
    use sha1 = SHA1.Create()
 
    sha1.ComputeHash(inputBytes) |> Array.fold (fun res byte -> res + byte.ToString("x2")) ""
