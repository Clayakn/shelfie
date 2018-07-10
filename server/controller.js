module.exports = {
    // Create 
    create: (req, res) => {
        const {productName, price, imageUrl} = req.body;
        req.app.get('db').create_product({productName, imageUrl, price}).then((newProducts) => {
        res.json(newProducts);
        }).catch( error => {
            console.log('error',error);
            res.status(500).send('There was an error on the server')
        })
    },
    // Read 
    read: ( req, res ) => {
        req.app.get('db').read_products()
          .then( products => res.status(200).send( products ) )
          .catch( error => {
            res.status(500).send({errorMessage: "There was an error on the server"});
            console.log('error', error)
          } );
      },
      // Update
      update: ( req, res ) => {
        const { id } = req.params;
        const { price, imageUrl, productName } = req.body;
        req.app.get('db').update_product({id, price, imageUrl, productName})
          .then( () => res.sendStatus(200) )
          .catch( error => {
            res.status(500).send({errorMessage: "There is an error on the server"});
            console.log('error', error)
          });
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
}