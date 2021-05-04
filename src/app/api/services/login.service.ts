/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Usuario } from '../models/usuario';
//import { UsuarioModelo } from 'src/app/modelo/usuario.model';
//import { UsuarioModel } from '../../models/usuario.model';


@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiLoginGet
   */
  static readonly ApiLoginGetPath = '/api/Login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLoginGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLoginGet$Plain$Response(params?: {
    Id?: number;
  }): Observable<StrictHttpResponse<Usuario>> {

    const rb = new RequestBuilder(this.rootUrl, LoginService.ApiLoginGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Usuario>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLoginGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLoginGet$Plain(params?: {
    Id?: number;
  }): Observable<Usuario> {

    return this.apiLoginGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Usuario>) => r.body as Usuario)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLoginGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLoginGet$Json$Response(params?: {
    Id?: number;
  }): Observable<StrictHttpResponse<Usuario>> {

    const rb = new RequestBuilder(this.rootUrl, LoginService.ApiLoginGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Usuario>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLoginGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLoginGet$Json(params?: {
    Id?: number;
  }): Observable<Usuario> {

    return this.apiLoginGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Usuario>) => r.body as Usuario)
    );
  }



}
