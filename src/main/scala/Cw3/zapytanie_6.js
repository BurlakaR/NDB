db.people.insertOne({sex:"Male",first_name:"Roman",last_name:"Burlaka",job:"Student",email:"s21455@pjwstk.edu.pl",location:{city:"Warsaw",address:{streetname:"CoolStreet",streetnumber:"404"}},description:"No",height:"171",weight:"73",birth_date:"1998-10-02T00:22:00Z",nationality:"Ukraine",credit:[{type:"jcb",number:"4044044044044040",currency:"USD",balance:"404.40"},{type:"maestro",number:"4044044044044044",currency:"PLN",balance:"404.04"}]})

printjson(db.people.find({first_name:'Roman',last_name:'Burlaka'}).toArray())