// import express for creating a server.
import express from 'express' ;

const app = express(); //creating a server ;

app.listen(3000,()=>{ // listening on port 3000
    console.log("server is running on ", 3000);
})

