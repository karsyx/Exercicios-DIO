import { DatabaseError } from 'pg-protocol';
import db from '../db';
import User from '../models/user.model';
import DatabaseErro from '../models/erros/database.error.model';

class UserRepository {
    async findAllUsers(): Promise<User[]> {
        const query = `
            SELECT uuid, username
            FROM application_users
        `;

        const { rows } = await db.query<User>(query);
        return rows || [];
    }

    async findById(uuid: string): Promise<User> {
        try {
        const query = `
            SELECT uuid, username
            FROM application_users
            WHERE uuid = $1
        `;
        
        const values = [uuid];
        const { rows } = await db.query<User>(query, values);
        const [ User ] = rows;
        return rows[0];
        } catch (error) {
            throw new DatabaseErro('Erro na consulta por ID', error);
        }
    }

    async findbyUsernameAndPassword(username: string, password: string): Promise<User | null> {
        try{
            const query =`
                SELECT uuid, username
                FROM application_users
                WHERE username = $1
                AND password = crypt($2, 'my_salt')
            `;
            const values = [username, password];
            const { rows } = await db.query<User>(query, values);
            const [user] = rows;
            return user || null;
        } catch (error) {
            throw new DatabaseErro('Erro na consulta por username an password', error);
        }
    }

    async create(user: User): Promise<string> {
        const script =`
            INSERT INTO application_users (
                username,
                password
            )
            VALUES ($1, crypt($2, 'my_salt'))
            RETURNING uuid
        `;

        const values = [user.username, user.password];
        const { rows } = await db.query<{ uuid: string }>(script, values);
        const [newUser] = rows;
        return newUser.uuid;
    }

    async update(user: User): Promise<void> {
        const script =`
            UPDATE application_users
            SET
                username = $1,
                password = crypt($2, 'my_salt')
            WHERE uuid = $3
        `;

        const values = [user.username, user.password, user.uuid];
        const { rows } = await db.query(script, values);
    }

    async remove(uuid: string): Promise<void> {
        const cript =`
            DELETE
            FROM application_users
            WHERE uuid = $1
        `;
        const values = [uuid];
        await db.query(cript, values);
    }
}

export default new UserRepository();