import  express from 'express';
import { query, validationResult } from 'express-validator'
const app = express();

app.use(express.json());
app.get('/hello', query('person').notEmpty(), (req: any, res: any) => {
    const result = validationResult(req)
    if (result.isEmpty()) {
        return res.send(`Hello, ${req.query.person}!`);
    }

    res.send({ errors: result.array() })

});


app.listen(3000);