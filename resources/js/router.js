import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "./views/Home";
import Profile from "./views/Profile";
import Company from './views/Company/Index';
import CompanyCreate from './views/Company/Create';
import CompanyUpdate from './views/Company/Update';
import Person from './views/Person/Index';
import PersonCreate from './views/Person/Create';

Vue.use(VueRouter);

export default new VueRouter({
    mode : 'history',
    routes: [
        {
            path : '/', name : 'home', component : Home,
            meta : { title : 'Ana Sayfa '}
        },
        {
            path : '/profil', name : 'profile', component : Profile,
            meta : { title : 'Profil '}
        },

        // Company Route
        {
            path : '/company', name : 'company', component : Company,
            meta : { title : 'Şirketler '}
        },
        {
            path : '/company/create', name : 'company.create', component : CompanyCreate,
            meta : { title : 'Şirket Ekle '}
        },
        {
            path : '/company/update/:id', name : 'company.update', component : CompanyUpdate,
            meta : { title : 'Şirket Güncelle '}
        },
        // Person Route
        {
            path : '/person', name : 'person', component : Person,
            meta : { title : 'Kişiler '}
        },
        {
            path : '/person/create', name : 'person.create', component : PersonCreate,
            meta : { title : 'Kişiler Ekle '}
        },
        {
            path : '/person/update/:id', name : 'person.update', component : CompanyUpdate,
            meta : { title : 'Kişiler Güncelle '}
        },
    ]
});
