import db from '../../../db/db';

class authenticate {
    signUp(req, res) {
        if (!req.body.title) {
            return res.status(400).send({
                success: 'false',
                message: 'hey, we need you to give a title',
            });
        } else if (!req.body.description) {
            return res.status(400).send({
                success: 'false',
                message: 'I need you to give a description please..:)',
            });
        }
        const todo = {
            id: db.length + 1,
            title: req.body.title,
            description: req.body.description,
        };
        db.push(todo);
        return res.status(201).send({
            success: 'true',
            message: 'Congratulations, you just added a todo. Check it out below',

            todo,
        });
    }

}

const auth = new authenticate();
export default auth;