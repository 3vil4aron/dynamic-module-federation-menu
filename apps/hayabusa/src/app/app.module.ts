import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { ProductsComponent } from './products/products.component';
import { LocationsComponent } from './locations/locations.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    ProductsComponent,
    LocationsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: OverviewComponent,
        },
        {
          path: 'products',
          component: ProductsComponent,
        },
        {
          path: 'locations',
          component: LocationsComponent,
        },
        {
          path: '',
          outlet: 'menu',
          loadChildren: () =>
            loadRemoteModule('task-menu', './Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
