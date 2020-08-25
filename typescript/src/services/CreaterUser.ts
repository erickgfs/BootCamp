/**
 * Para criar: nome,email,password
 */

interface TechObject{
    title: string;
    experience: number ;
}

interface CreateUserData {
    nome?: string;
    email: string;
    password: string;
    techs: Array<string | TechObject>;
}

export default function createUser({ nome = '', email, password }: CreateUserData) {
    const user = {
        nome,
        email,
        password,
    }

    return user;
}