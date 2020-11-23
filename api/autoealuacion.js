module.exports = (req,res) => {
  const { name = 'Fran Torres'} = req.query
  res.status(200).send(`Ejercicios de autoevaluación de ${name} `)
};

