
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'index', component: () => import('pages/Index.vue') },
      { path: 'seguranca-trabalho', name: "seguranca-trabalho", component: () => import('pages/SegurancaTrabalho.vue') },
      { path: 'meio-ambiente', name: "meio-ambiente", component: () => import('components/Ambiente.vue') },
      { path: 'qualidade', name: "qualidade", component: () => import('pages/Qualidade.vue') },
      { path: 'contatos', name: "contatos", component: () => import('pages/Contatos.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
