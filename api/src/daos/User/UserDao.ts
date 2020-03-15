import User, { IUser } from '../../entities/User';
import { getRandomGuid } from '../../shared/functions';
import { query } from '../../../database/db';


export interface IUserDao {
    getOne: (id: string) => Promise<IUser | null>;
    getByEmail: (email: string) => Promise<IUser | null>;
    getAll: () => Promise<IUser[]>;
    add: (user: IUser) => Promise<void>;
    update: (user: IUser) => Promise<void>;
    delete: (id: string) => Promise<void>;
}

class UserDao implements IUserDao {

    public async getOne(id: string): Promise<IUser | null> {
        try {
            const text = "SELECT * FROM Users WHERE id=$1";
            const params = [id]

            let user = new User('');
            return query(text, params).then((res) => {
                if (res.rows.length > 0) {
                    const row = res.rows[0];
                    user.id = row.id,
                        user.firstName = row.firstname,
                        user.lastName = row.lastname,
                        user.userName = row.username,
                        user.createdDate = row.datecreated,
                        user.passwordHash = row.password_hash

                    return user;
                }
                return null;
            });
        } catch (err) {
            throw (err);
        }
    }

    public async getByEmail(email: string): Promise<IUser | null> {
        try {
            const text = "SELECT * FROM Users WHERE email=$1";
            const params = [email]
            const user = new User(email);

            return query(text, params)
                .then((res) => {
                    if (res.rows.length > 0) {
                        const row = res.rows[0];
                        user.id = row.id,
                            user.firstName = row.firstname,
                            user.lastName = row.lastname,
                            user.userName = row.username,
                            user.createdDate = row.datecreated,
                            user.passwordHash = row.password_hash

                        return user;
                    }
                    return null;
                });
        } catch (err) {
            throw err;
        }
    }

    public async getAll(): Promise<IUser[]> {
        // TODO
        return [] as any;
    }

    public async add(user: IUser): Promise<void> {
        const text = "INSERT INTO Users(firstname, lastname, password_hash, username, email, datecreated) " +
            "VALUES($1, $2, $3, $4, $5, $6)";
        const params = [user.firstName, user.lastName, user.passwordHash, user.userName, user.email, new Date()]

        query(text, params).then((res) => {
            return res;
        }).catch((err) => {
            throw err;
        });
    }


    public async update(user: IUser): Promise<void> {
        // TODO
        return {} as any;
    }

    public async delete(id: string): Promise<void> {
        // TODO
        return {} as any;
    }
}

export default UserDao;
