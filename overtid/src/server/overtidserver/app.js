const express =require('express');
const mysql =require('mysql');
const cors=require('cors');
const jwt =require('jsonwebtoken');

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
        app.get('/login/:username/:password',(reg,res)=>{
        console.log(reg.params.username.slice(1),reg.params.username.slice(1))
        let sql=`SELECT * FROM bruker WHERE brukernavn ='${reg.params.username.slice(1)}'AND passord ='${reg.params.password.slice(1)}'`;//
            let query =db.query(sql,(err,results)=>{
                if(err){ 
                    res.send("Feil kode fra server: ",err);
                }
               else{
                   res.json({
                       results
                   })
                   console.log(results)
               }
        
            })
        
            })
            app.get('/loginTest/:username/:password',(reg,res)=>{
                console.log(reg.params.username.slice(1),reg.params.username.slice(1))
                let sql=`SELECT * FROM bruker WHERE brukernavn ='${reg.params.username.slice(1)}'AND passord ='${reg.params.password.slice(1)}'`;//
                    let query =db.query(sql,(err,results)=>{



                        if(results.length==0){ 
                            res.send(err);
                            console.log("results er null")
                
                        }
                       else{
                        var token = jwt.sign({results}, 'test');
                        res.json(token);
                        }
                        
                        console.log(results)
                           
                          
                       })
                      
                    
                
                    })
        

                    app.get('/addOvertid',(reg,res)=>{
     
                        const {bruker_id,aar,dato,beskrivelse,timer}=reg.query;
                       
                      
                        console.log(`addOvertid kjører ,'${bruker_id}','${aar}','${dato}','${beskrivelse}','${timer}'`)
                        console.log(`${bruker_id}`,`${beskrivelse}` )
                        const INSERT_ONE_OVERTID=`INSERT INTO timer_overtid (bruker_id,aar,dato,beskrivelse,tid)VALUES('${bruker_id}','2017','2017-10-10','${beskrivelse}','5.5')`
                       
                      db.query(INSERT_ONE_OVERTID,(err,result)=>{
                          if(err){
                              console.log("Dette er error fra addOvertid:",err)
                             return res.send(err)
                            }else{
                                console.log("Ny overtid lagt til")
                                return res.send("Ny overtid lagt til")
                            }
                      })
                    });
       