module.exports = {
    // Create 
    create: (req, res) => {
        const {name, price, imageUrl} = req.body;
        req.app.get('db').create_product([name, imageUrl, price]).then((newProducts) => {
        res.json(newProducts);
        }).catch( error => {
            console.log('error',error);
            res.status(500).send('There was an error on the server')
        })
    },
    // Read 
    getAll: ( req, res ) => {
        req.app.get('db').read_products()
          .then( products => res.status(200).send( products ) )
          .catch( error => {
            res.status(500).send({errorMessage: "There was an error on the server"});
            console.log('error', error)
          } );
      },
      // Delete
      delete: ( req, res ) => {
        req.app.get('db').delete_product([ req.params.id ])
          .then( () => res.sendStatus(200) )
          .catch( error => {
            res.status(500).send({errorMessage: "There was an error on the server"});
            console.log('error', error)
          } );
      },
      // Update
      update: ( req, res ) => {
        const {name, price, imageUrl} = req.body;
        req.app.get('db').update_product([ req.params.id, name, imageUrl, price ])
          .then( () => res.sendStatus(200) )
          .catch( error => {
            res.status(500).send({errorMessage: "There is an error on the server"});
            console.log('error', error)
          });
      },
}