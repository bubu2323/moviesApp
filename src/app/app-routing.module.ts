import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MoviesComponent} from "./pages/movies/movies.component";
import {SeriesComponent} from "./pages/series/series.component";
import {GenresComponent} from "./pages/genres/genres.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'movies', component: MoviesComponent},
  { path: 'series', component: SeriesComponent},
  { path: 'genres', component: GenresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
