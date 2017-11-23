import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import{ArticleComponent} from '../app/article/article.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { path: 'home', component: HomeComponent },
    { path: 'articles/:id', component: ArticleComponent }

];

export const Routing = RouterModule.forRoot(routes);