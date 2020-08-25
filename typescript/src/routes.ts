import { Request, Response } from 'express';
import createUser from './services/createrUser'

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'erickgfs@gmail.com',
        password: '1234',
        techs:
            [
                "NodeJS",
                "ReactJS",
                "React-Native",
                { title: "JavaScript", experience: 100 }
            ]
    });

    console.log(user.email)

    return response.json({ message: "hello world!!" })
}