/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import iView from '../src/index';
// import locale from '../src/locale/lang/en-US';
import locale from '../src/locale/lang/zh-CN';

Vue.use(VueRouter);
Vue.use(iView, { locale });

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: require('./home.vue'),
            meta: {
                parent: [''],
                breadcrumb: 'Home'
            },
            children: [
                {
                    path: '/',
                    component: require('./dashboard.vue'),
                    meta: {
                        parent: ['/'],
                        breadcrumb: 'Home'
                    },
                },
                {
                    path: '/examples',
                    component: require('./examples.vue'),
                    meta: {
                        parent: ['/'],
                        breadcrumb: 'Examples'
                    },
                    children: [
                        {
                            path: '/examples/affix',
                            component: require('./examples/affix.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Affix'
                            }
                        },
                        {
                            path: '/examples/grid',
                            component: require('./examples/grid.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Grid'
                            }
                        },
                        {
                            path: '/examples/button',
                            component: require('./examples/button.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Button'
                            }
                        },
                        {
                            path: '/examples/input',
                            component: require('./examples/input.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/radio',
                            component: require('./examples/radio.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/checkbox',
                            component: require('./examples/checkbox.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/steps',
                            component: require('./examples/steps.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/timeline',
                            component: require('./examples/timeline.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/switch',
                            component: require('./examples/switch.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/alert',
                            component: require('./examples/alert.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/badge',
                            component: require('./examples/badge.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/tag',
                            component: require('./examples/tag.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/input-number',
                            component: require('./examples/input-number.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/upload',
                            component: require('./examples/upload.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/progress',
                            component: require('./examples/progress.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/collapse',
                            component: require('./examples/collapse.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/carousel',
                            component: require('./examples/carousel.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/card',
                            component: require('./examples/card.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/tree',
                            component: require('./examples/tree.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/rate',
                            component: require('./examples/rate.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/circle',
                            component: require('./examples/circle.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/tabs',
                            component: require('./examples/tabs.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/tooltip',
                            component: require('./examples/tooltip.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/poptip',
                            component: require('./examples/poptip.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/slider',
                            component: require('./examples/slider.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/dropdown',
                            component: require('./examples/dropdown.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/breadcrumb',
                            component: require('./examples/breadcrumb.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/menu',
                            component: require('./examples/menu.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/spin',
                            component: require('./examples/spin.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/cascader',
                            component: require('./examples/cascader.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/select',
                            component: require('./examples/select.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/backtop',
                            component: require('./examples/back-top.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/page',
                            component: require('./examples/page.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/transfer',
                            component: require('./examples/transfer.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/date',
                            component: require('./examples/date.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/form',
                            component: require('./examples/form.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/table',
                            component: require('./examples/table.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/loading-bar',
                            component: require('./examples/loading-bar.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/modal',
                            component: require('./examples/modal.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/message',
                            component: require('./examples/message.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        },
                        {
                            path: '/examples/notice',
                            component: require('./examples/notice.vue'),
                            meta: {
                                parent: ['/', '/examples'],
                                breadcrumb: 'Default Page'
                            }
                        }
                    ]
                }
            ]
        },
        {
            path: '/login', component: require('./login.vue')
        },
    ]
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
