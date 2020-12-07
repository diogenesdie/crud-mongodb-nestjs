import { Document } from 'mongoose';

export class User extends Document{
    name: String;
    email: String;
    username: String;
    password: String;
}