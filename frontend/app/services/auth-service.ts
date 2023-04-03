import axios from 'axios';


interface IAuthService {
    test(): Promise<any>;
    login(data: UserAuthData): Promise<UserAuthResponse>;
}

export class AuthService implements IAuthService {
    async test(): Promise<any> {
        var res = await axios.get('http://192.168.134.109:8080/api/test');
        console.log(res.data);
    }
    async login(data: UserAuthData): Promise<UserAuthResponse> {
        //TODO: Change to POST
        const res = await axios.get('https://my-json-server.typicode.com/typicode/demo/posts',
        {
          headers: {
            "Content-Type": "application/json"
          },
        });

        return res.data[0];
    }

}