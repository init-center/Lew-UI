import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const LewAvatar = () => import('../views/demo/general/LewAvatar.vue');
const LewButton = () => import('../views/demo/general/LewButton.vue');
const LewSiderBar = () => import('../views/demo/general/LewSiderBar.vue');
const LewTabs = () => import('../views/demo/general/LewTabs.vue');
const LewTag = () => import('../views/demo/general/LewTag.vue');
const LewTime = () => import('../views/demo/general/LewTime.vue');

const LewCascader = () => import('../views/demo/form/LewCascader.vue');
const LewCheckbox = () => import('../views/demo/form/LewCheckbox.vue');
const LewInput = () => import('../views/demo/form/LewInput.vue');
const LewRadio = () => import('../views/demo/form/LewRadio.vue');
const LewSelect = () => import('../views/demo/form/LewSelect.vue');
const LewSwitch = () => import('../views/demo/form/LewSwitch.vue');
const LewTextarea = () => import('../views/demo/form/LewTextarea.vue');

const LewAlert = () => import('../views/demo/feedback/LewAlert.vue');
const LewBadge = () => import('../views/demo/feedback/LewBadge.vue');
const LewDialog = () => import('../views/demo/feedback/LewDialog.vue');
const LewMessage = () => import('../views/demo/feedback/LewMessage.vue');
const LewModal = () => import('../views/demo/feedback/LewModal.vue');
const LewPopover = () => import('../views/demo/feedback/LewPopover.vue');
const LewResult = () => import('../views/demo/feedback/LewResult.vue');

const routes: Array<RouteRecordRaw> = [
    { path: '/Avatar', name: 'LewAvatar', component: LewAvatar },
    { path: '/Button', name: 'LewButton', component: LewButton },
    { path: '/SiderBar', name: 'LewSiderBar', component: LewSiderBar },
    { path: '/Tabs', name: 'LewTabs', component: LewTabs },
    { path: '/Tag', name: 'LewTag', component: LewTag },
    { path: '/Time', name: 'LewTime', component: LewTime },

    { path: '/Cascader', name: 'LewCascader', component: LewCascader },
    { path: '/Checkbox', name: 'LewCheckbox', component: LewCheckbox },
    { path: '/Input', name: 'LewInput', component: LewInput },
    { path: '/Radio', name: 'LewRadio', component: LewRadio },
    { path: '/Select', name: 'LewSelect', component: LewSelect },
    { path: '/Switch', name: 'LewSwitch', component: LewSwitch },
    { path: '/Textarea', name: 'LewTextarea', component: LewTextarea },

    { path: '/Alert', name: 'LewAlert', component: LewAlert },
    { path: '/Result', name: 'LewResult', component: LewResult },
    { path: '/Dialog', name: 'LewDialog', component: LewDialog },
    { path: '/Popover', name: 'LewPopover', component: LewPopover },
    { path: '/Badge', name: 'LewBadge', component: LewBadge },
    { path: '/Modal', name: 'LewModal', component: LewModal },
    { path: '/Message', name: 'LewMessage', component: LewMessage },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
