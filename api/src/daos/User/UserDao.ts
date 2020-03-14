import { IUser } from '../../entities/User';
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
        // TODO
        return [] as any;
    }

    public async getByEmail(email: string): Promise<IUser | null> {
        return [] as any;
    }

    public async getAll(): Promise<IUser[]> {
        // TODO
        return [] as any;
    }

    public async add(user: IUser): Promise<void> {
        try {
            const text = "INSERT INTO Users(firstname, lastname, password_hash, username, email, datecreated) " +
                "VALUES($1, $2, $3, $4, $5, $6)";
            const params = [user.firstName, user.lastName, user.passwordHash, user.userName, user.email, new Date()]

            query(text, params, (err: Error, res: any) => {
                if(err) {return err;}
                else {
                    return res;
                }
            })

        } catch (err) {
            throw err;
        }
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
