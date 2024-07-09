import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY, Observer } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ArtigoService {
  baseUrl = "http://localhost:8080/artigos";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(artigo: any): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      this.http.post<any>(this.baseUrl, artigo).subscribe(response => {
        observer.next(response);
        observer.complete();
      }, (error: any) => {
        if (error.status !== 500) {
          this.errorHandler(error);
        }
        observer.error(error);
        observer.complete();
      });
    });
  }

  read(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(artigo: any): Observable<any> {
    const url = `${this.baseUrl}/${artigo.id}`;

    return new Observable((observer: Observer<any>) => {
      this.http.put<any>(url, artigo).subscribe(response => {
        observer.next(response);
        observer.complete();
      }, (error: any) => {
        if (error.status !== 500) {
          this.errorHandler(error);
        }
        observer.error(error);
        observer.complete();
      });
    });
  }

  delete(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;

    return new Observable((observer: Observer<any>) => {
      this.http.delete<any>(url).subscribe(response => {        
        observer.next(response);
        observer.complete();
      }, (error: any) => {
        if (error.status !== 500) {
          this.errorHandler(error);
        }
        observer.error(error);
        observer.complete();
      });
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
