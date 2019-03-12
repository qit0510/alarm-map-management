import Home from "../pages/Home/Home";
import Security from "../pages/Security/Security"
import Service from "../pages/Service/Service"
import Management from "../pages/Management/Management"

export default [
  {
    path: '/',
    title: '工作台',
    icon: 'desktop',
    exact: true,
    component: Home
  },
  {
    path: '/security',
    title: '公共安全',
    exact: true,
    component: Security
  },
  {
    path: '/service',
    title: '公共服务',
    exact: true,
    component: Service
  },
  {
    path: '/management',
    title: '公共管理',
    exact: true,
    component: Management
  },
]
