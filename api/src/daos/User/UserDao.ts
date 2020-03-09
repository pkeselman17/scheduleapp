import { IUser } from '../../entities/User';
import { getRandomGuid } from '../../shared/functions';
import {query} from '../../../database/db';


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
            
            const queryObj = {
                text: "INSERT INTO Users("
            }
            query("INSERT INTO Users $1")
            user.id = getRandomGuid();
            
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
