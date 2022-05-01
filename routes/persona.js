app.post("/", function (req, res) {
    personas.push(req.body)
      res.status(201).json({
          msg:`Registro exitoso`
      })
    });
  
  app.get("/", function (req, res) {
    res.json({
      personas
    })
  });
  
  app.get("/buscar", function (req, res) {
    const {email}=req.query
    const persona=personas.find(persona => persona.email==email)
    res.json({
      persona
    })
  });
  
  app.get("/login", function (req, res) {
    const {email,password}=req.query
    const persona=personas.find(persona => persona.email==email && persona.password==password)
    if(persona)
      res.json({
        "msg":"Bienvenido"
      })
    else
      res.json({
        "msg":"Ud que hace aqui????"
      })
  });
  
  app.delete("/", function (req, res) {
    const {email}=req.query
    personas=personas.filter(persona => persona.email!=email)
    res.json({
      "msg":"Registro eliniminado correctamente"
    })
  });