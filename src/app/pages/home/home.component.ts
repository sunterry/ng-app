import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private homeServe: HomeService, route: ActivatedRoute) {
    // const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
    console.log('route url', route.url)
    console.log('route snapshot', route.snapshot)
    console.log('route params', route.params)
    console.log('route queryParams', route.queryParams)
    console.log('route fragment', route.fragment)
    console.log('route data', route.data)
    console.log('route outlet', route.outlet)
    console.log('route component', route.component)
    console.log('route routeConfig', route.routeConfig)
    console.log('route root', route.root)
    console.log('route root', route.parent)
    console.log('route firstChild', route.firstChild)
    console.log('route children', route.children)
    console.log('route pathFromRoot', route.pathFromRoot)
    console.log('route paramMap', route.paramMap)
    console.log('route queryParamMap', route.queryParamMap)
    this.homeServe.getBanner().subscribe(banners => {
      console.log(banners);
    });
  }

  ngOnInit() {
  }

}
