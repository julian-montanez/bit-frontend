import { Routes } from '@angular/router';
import { Home } from './component/pages/home/home';
import { SecondPage } from './component/pages/second-page/second-page';
import { PageNoFound } from './component/pages/page-no-found/page-no-found';
import { AboutUs } from './component/pages/about-us/about-us';
import { SignUp } from './component/pages/sign-up/sign-up';
import { LogIn } from './component/pages/log-in/log-in';
import { CreateInfo } from './component/pages/create-info/create-info';
import { activateGuard } from './guards/activate-guard';
import { InfoPost } from './component/pages/info-post/info-post';

export const routes: Routes = [
    {
        path: "home",
        component: Home,
        title: "page | Home"
    },
    {
        path: "second-page",
        component: SecondPage,
        title: "page | second page"
    },
    {
        path : "about-us",
        component:AboutUs,
        title: "page | about us"
    },
    {
        path : "log-in",
        component:LogIn,
        title: "page | log in"
    },
    {
        path : "sign-up",
        component:SignUp,
        title: "page | sing up"
    },
    {
        path : "create-info",
        component:CreateInfo,
        title: "page | create-info",
        canActivate:[activateGuard]
    },
    {
        path : "info-post/:category/:_id", 
        component:InfoPost,
        title: "page | posts" 
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "**",
        component: PageNoFound,
        title: "error | page no found"
    }
];
