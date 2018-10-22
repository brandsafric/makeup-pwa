import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GalleryMainPageComponent } from './gallery-main-page/gallery-main-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    data: {
      title: 'Jana Jurakova Wedding Makeup Artist'
    }
  }, {
    path: 'gallery-main',
    component: GalleryMainPageComponent,
    data: {
      title: 'Galleries'
    }
  }, {
    path: 'contact',
    component: ContactPageComponent,
    data: {
      title: 'Contact'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
