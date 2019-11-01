import { InjectionToken, NgModule } from '@angular/core';
// import { HomeService } from './home.service';

export const baseUrl = new InjectionToken('ApiConfig')
@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    {
      provide: baseUrl,
      useValue: 'http://localhost:3000'
    }
  ]  //  providers: [HomeService] angular6之前可以放在这里，如果服务没有被用到，是不能被去掉的
})
export class ServicesModule { }
