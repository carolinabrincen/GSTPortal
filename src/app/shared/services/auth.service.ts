import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractManagerService } from './abstractManagerService';
import { API_URLS } from '../models/apiURL';
import notify from 'devextreme/ui/notify';

export interface IUser {
  idUsuario: string,
  nombre: string,
  idGrupo: string,
  grupo: string,
  idUnidad: number,
  unidadNegocio: string,
  token: string
}

export interface IToken {
 tokenUsuario: string
}

const defaultPath = '/';
const defaultUser = {
  email: 'sandra@example.com',
  avatarUrl: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png'
};

@Injectable()
export class AuthService extends AbstractManagerService{
  //private _user: IUser | null = defaultUser;
  private _user: IUser | null = null;
  private _token: IToken | null = null;
  token: string = "";
  get loggedIn(): boolean {
    return !!this._user;
  }

  private _lastAuthenticatedPath: string = defaultPath;
  set lastAuthenticatedPath(value: string) {
    this._lastAuthenticatedPath = value;
  }

  constructor(private router: Router, http: HttpClient) {
     super(http);
  }

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  async logIn(email: string, password: string) {

    try {
      // Send request
      console.log(email, password);
      // this._user = { ...defaultUser, email };
      this.httpOptions.headers = this.httpOptions.headers.set('Authorization',this.token);
      let xUser = this.post<any>((this.API_URL + API_URLS.LOGEO),{usuario:email, password: password},this.httpOptions).subscribe(data => {

        console.log('💙',data);
        
        sessionStorage.setItem('token', data.data.token.tokenUsuario);
        sessionStorage.setItem('idUsuario', data.data.data.idUsuario);

       

        this._user = data.data.data;


        this.token = data.data.token.tokenUsuario;

        // this.router.navigate(['/profile']);
        this.router.navigate([this._lastAuthenticatedPath]);
        console.log('💚');

    }, err => {

      notify("Usuario inválido, verifique", 'error', 2000);
        // validacion que el correo del usuario exista para recuperar contraseña
        // return {
          
        //   isOk: false,
        //   data: null,
        //   message: "Usuario no encontrado. Verifique la información"
        // };
        // console.log ('💜', err);
        // if (err.status === false) {
        //   console.log ('💜', err);
        //   let errorMessage = '';
        //   errorMessage = 'Usuario no encontrado. Verifique la información'
          // this.toastService.advertenciaMsg(errorMessage);
          // console.log('Usuario no encontrado. Verifique la información');
      
        // this.handleError(err);
    });;



      // this.router.navigate(['/profile']);



      // console.log ('🖤' );
      // if(this._user === null)
      // {
      return {
        isOk: true,
        data: this._user
      };
      // } else
      // {
      //   return {
      //     isOk: false,
      //     data: null,
      //     message: "Authentication failed"
      //   };
      // }
    }
    catch {
      // console.log('❤️');
       return {
        isOk: false,
        data: null,
        message: "Authentication failed"
       };
    }

    // return {
    //   isOk: false,
    //   data: null,
    //   message: "Authentication failed"
    // };

  }

  async getUser() {
    try {
      // Send request

      return {
        isOk: true,
        data: this._user
      };
    }
    catch {
      return {
        isOk: false,
        data: null
      };
    }
  }

  async createAccount(email: string, password: string) {
    try {
      // Send request


      this.router.navigate(['/create-account']);
      return {
        isOk: true
      };
    }
    catch {
      return {
        isOk: false,
        message: "Failed to create account"
      };
    }
  }

  async changePassword(email: string, recoveryCode: string) {
    try {
      // Send request


      return {
        isOk: true
      };
    }
    catch {
      return {
        isOk: false,
        message: "Failed to change password"
      }
    };
  }

  async resetPassword(email: string) {
    try {
      // Send request


      return {
        isOk: true
      };
    }
    catch {
      return {
        isOk: false,
        message: "Failed to reset password"
      };
    }
  }

  async logOut() {
    this._user = null;
    this.router.navigate(['/login-form']);
  }
}

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isLoggedIn = this.authService.loggedIn;
    const isAuthForm = [
      'login-form',
      'reset-password',
      'create-account',
      'change-password/:recoveryCode'
    ].includes(route.routeConfig?.path || defaultPath);

    if (isLoggedIn && isAuthForm) {
      this.authService.lastAuthenticatedPath = defaultPath;
      this.router.navigate([defaultPath]);
      return false;
    }

    if (!isLoggedIn && !isAuthForm) {
      this.router.navigate(['/login-form']);
    }

    if (isLoggedIn) {
      this.authService.lastAuthenticatedPath = route.routeConfig?.path || defaultPath;
    }

    return isLoggedIn || isAuthForm;
  }
}
