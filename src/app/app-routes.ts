import { Routes } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BaseComponent } from './components/base/base.component';

const routes: Routes = [
    { path: '', redirectTo: '/app', pathMatch: 'full' },
    {
        path: 'app', component: BaseComponent,  children: [
            { path: 'home', component: HomeComponent, },
            { path: 'about-us', component: AboutUsComponent, },
            { path: 'contact', component: ContactComponent, },
        ]
    },

];

export { routes };