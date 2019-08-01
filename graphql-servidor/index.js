import express from 'express';
//GraphQL
import graphqlHTTP from 'express-graphql';
import schema from './schema';


const app = express();

app.get('/', (req, res) =>{
    res.send('Todo listo');
});

//El resolver
const root = {hola: () => "Hola Mundo desde GraphQL"};

app.use('/graphql', graphqlHTTP({
    // que Schema va a utilizar
    schema,
    //El resolver se pasa como root value
    rootValue: root,
    //Utilizar graphical
    graphiql : true
}));

app.listen(8000, () => console.log('El servidor esta funcionando') );