// import users from "../users.js";
// import { removeUserFromArray } from "../users.js"; 

// above method having some issues , because ES module are read-only , we can't change
// the reference , and if I'm changing it using on delete setter function , then I'm still
// old array data because I'm not using getter function for it.

var users = [] ;

function getAllUser(req, res){

    

    // status 200 -> valid request 
    if(!users.length) return res.status(200).send({
        msg : "No user found",
        users : users 
    })

    // status 200 -> valid request 
    return res.status(200).send({
        msg : "Found Successful",
        users : users 
    })
}


function createUser(req , res){
    console.log("log body" , req.body)
    const { id , firstName , lastName , hobby } = req.body ;


    if(users.find((user)=>user.id === id)){

        // status 409 -> duplicate id
        return res.status(409).send({
            err : "user already present : duplicate id"
        })
    }

    users.push({id : id , firstName : firstName , lastName : lastName , hobby : hobby});

    //status 201 -> document created 
    res.status(201).send({
        msg : "user has been created successfully"
    })
}

function getUser(req , res){

    console.log("log body",req.body);
    console.log("log query".req?.query);
    console.log("log params",req.params);

    const {id} = req.params ;

    const result = users.find((user)=> user.id === id);
    if(!result){
        //status 404 -> user not found ;
        return res.status(404).send({
            msg : "User not found",
        })
    }

    // status 200 , ok , user found
    return res.status(200).send({
        user : result 
    })
}

function updateUser(req , res){

    const {id} = req.params ;
    const newUser = req.body ;

    console.log("Newuser ",newUser)

    const result = users.findIndex((user)=> user.id === id);

    if(result === -1){
        // status 404 -> user not found 
        return res.status(404).send({
            msg : "user Not Found",
        })
    }

    users[result] = {...users[result] , ...newUser} ;
    console.log("user ", users[result]);
  

  
    return res.status(200).send({
        user : users[result]
    })
}

function deleteUser (req , res){

    const {id} = req.params ;

    console.log("id",id)
    


    const result = users.findIndex((user)=> user.id === id);

    if(result === -1){
        return res.status(404).send({
            msg : "User Not Found"
        })
    }

    // delete users[result];
    // users = users.filter(user => user.id !== id);
    // removeUserFromArray(id)

    users.splice(result , 1)

    return res.status(200).send({
        msg : "User has been deleted successfully"
    })
}


export {createUser, getAllUser, getUser, updateUser, deleteUser}