import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

class User {
    app: string;
    email: string;
    roles: string;
    userName: string;
    userDishes? : Object;
}
class Dish {
    date: number;
    description: string;
    img: string;
    name: string;
    type : string;
    id: string;
}

const REACT_APP_DB_URL='https://react-app-10627.firebaseio.com';

@Injectable()
export class GetUserService {
    public obsAdminDishes: Subject<Dish[]> = new Subject<Dish[]>();

    constructor(private http: HttpClient) {
    }

    getAminDishes() {
        this.http.get(`${REACT_APP_DB_URL}/menu_admin.json`).subscribe((res) => {
            // console.log(res)
            const dishes: Dish[] = Object.keys(res).map((key: string) => ({...res[key], id: key}));
            this.obsAdminDishes.next(dishes);
        })
    }

    getUsers() {
        return this.http.get(`${REACT_APP_DB_URL}/users.json`).pipe(
            map((response: any) => {
                // console.log(response);
                const users = [];
                if (response) {
                    Object.keys(response).forEach(key => {
                        if (response[key].app === 'angular') {
                            users.push({...response[key], id: key});
                        }
                    })
                }
                return users;
            })
        );
    }

}
