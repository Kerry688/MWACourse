const express = require('express');
const app = express();
app.use(express.json());
 
 
let grades=[
    {id:"1",name:'Assad Saad',course:'MWA',grade:95},
    {id:"2",name:'Karim Ali',course:'Alogorithm',grade:92} 
]
 
//Get
app.get('/grades',function(req,res){
    res.send(grades);
    res.end();   
}
);

app.get('/grades/:id',function(req,res){    
    const id=req.params.id;
    const result = grades.find( grade => grade.id == id);
     res.send(JSON.stringify(result));
    res.end();   
}
);

 //Post
app.post('/grades', (req, res) => {
    grades.push(req.body);
    console.log(req.body);
    res.end();
  });


  // Delete
app.delete('/grades/:id',function(req,res){  
    const filtered= grades.filter(grade=> { return grade.id !== req.params.id });
    grades=filtered;
    res.send(grades);
    res.end();   
}
);
 

app.listen(3000, function() 
{console.log('listening on 3000')});
