const express =require('express');
const mysql =require('mysql');
const cors=require('cors');

//Lager forbindelse
const db=mysql.createConnection({
    
host :'localhost',
user :'root',
password:'',
database:'overtid'
});
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("Min sql forbindelse er etablert !!!")

});




const app= express();
app.use(cors());

app.listen('5000',()=>{
    console.log('Server startet på port 5000')
});
app.get('/visBrukere',(reg,res)=>{
    let sql='SELECT * FROM bruker';
    let query =db.query(sql,(err,results)=>{
        console.log('Server startet på port 5000')
        if(err){ 
            res.send(err);
        }
       else{
           res.json({
               data:results,
              
           })
       }

    })
})


app.get('/visEnBruker/:id',(reg,res)=>{
    console.log(reg.params.id)
    let sql=`SELECT * FROM bruker WHERE Id='${reg.params.id.slice(1)}'`;//
    let query =db.query(sql,(err,results)=>{
        if(err){ 
            res.send(err);
        }
       else{
           res.json({
               data:results
           })
       }

    })

    })

    app.get('/addEnBruker',(reg,res)=>{
        
        
        //const {id,navn,passord,brukernavn}=reg.query;
       // const INSERT_ONE_USER=`INSERT INTO bruker (id,navn,passord,brukernavn)VALUES('${id},${navn},${passord},${brukernavn}')`
        const {navn,passord,brukernavn}=reg.query;
        console.log(`'${navn}','${passord}','${brukernavn}'`)
        const INSERT_ONE_USER=`INSERT INTO bruker (navn,passord,brukernavn)VALUES('${navn}','${passord}','${brukernavn}')`
       
      db.query(INSERT_ONE_USER,(err,result)=>{
          if(err){
             return res.send(err)
            }else{
                return res.send("Ny bruker added")
            }
      })
    });

    app.get('/sjekkUsername/:username',(reg,res)=>{
        console.log(reg.params.username.slice(1))
        let temp =reg.params.username
        let sql=`SELECT * FROM bruker WHERE brukernavn = '${reg.params.username.slice(1)}'`;//
        let query =db.query(sql,(err,results)=>{
            if(err){ 
                res.send(err);
            }
           else{
               res.json({
                   results
               })
               console.log(results)
           }
    
        })
    
        })
        

       