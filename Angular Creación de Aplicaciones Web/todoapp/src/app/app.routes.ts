import { Routes } from '@angular/router';

import {Home} from './pages/home/home';
import {Labs} from './pages/labs/labs';
import { Component } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
   {
        path: 'labs',
        component: Labs
   }
];
