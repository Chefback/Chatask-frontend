
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue'),
        children: [
            {
                path: '/about',
                name: 'about',
                // route level code-splitting
                // this generates a separate chunk (About.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import('../views/AboutView.vue'),
                children: [
                    {
                        path: ':type',
                        name: 'group',
                        component: () => import('../views/TodoList/TodoList.vue'),
                        children: [
                            {
                                path: '/:taskid',
                                name: 'taskdetail',
                                component: () => import('../views/TodoContent/TodoContent.vue'),
                            }
                        ]
                    },
                ]
            },
        ]

    },
]

export default routes