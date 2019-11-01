import { Inject, Injectable } from '@angular/core';
import { ServicesModule } from './services.module';
import { Observable } from 'rxjs';
import { Banner } from './data-types/common.type';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { baseUrl } from './services.module';

@Injectable({
  providedIn: ServicesModule
})
export class HomeService {

  constructor(private http: HttpClient, @Inject(baseUrl) private uri: string) {}
  getBanner(): Observable<Banner[]> {
    return this.http.get('http://localhost:3000/banner')
      .pipe(map((res: { banners: Banner[] }) => res.banners));
  }
}
