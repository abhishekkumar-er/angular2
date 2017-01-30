import { UserComponent } from './components/user.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AboutComponent } from './components/about.component';


const appRoutes : Routes = [
    {
        path : '',
        component : UserComponent
    },
    {
        path : 'about',
        component : AboutComponent
    }

]


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);