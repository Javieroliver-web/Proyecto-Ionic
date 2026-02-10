import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    // API Path
    basePath = 'http://localhost:3000/usuarios';

    constructor(private http: HttpClient) { }

    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    // Handle API errors
    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    };


    // Create a new item
    createItem(item: any): Observable<Usuario> {
        return this.http.post<Usuario>(this.basePath, JSON.stringify(item), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    // Get single item by id
    getItem(id: any): Observable<Usuario> {
        return this.http.get<Usuario>(this.basePath + '/' + id)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    // Get students data
    getList(): Observable<Usuario> {
        return this.http.get<Usuario>(this.basePath)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    // Update item by id
    updateItem(id: any, item: any): Observable<Usuario> {
        return this.http.put<Usuario>(this.basePath + '/' + id, JSON.stringify(item), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    // Delete item by id
    deleteItem(id: any) {
        return this.http.delete<Usuario>(this.basePath + '/' + id, this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

}
