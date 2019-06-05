import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
//import { httpFactory } from '@angular/http/src/http_module';

import { Producto } from '../models/producto';
import { GLOBAL } from './global';

@Injectable()
export class ProductoService {

    public url:string;

    constructor(private _http:HttpClient){
        this.url = GLOBAL.url;
    }
    getProductos() {
        return "hola mundo desde el servicio";
    }
}