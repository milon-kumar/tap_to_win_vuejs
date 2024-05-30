import { createRouter, createWebHistory } from "vue-router";
import scan from "../pages/scan/Scan.vue"
import wallet from "../pages/wallet/Wallet.vue"
import Walletdetails from "../pages/wallet/Walletdetails.vue"
import tapToWin from "../pages/tap-to-win/TapToWin.vue"
import setting from "../pages/setting/Setting.vue"
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'scan',
            component: scan
        }, {
            path: '/wallet',
            name: 'wallet',
            component: wallet
        }, {
            path: '/Walletdetails',
            name: 'Walletdetails',
            component: Walletdetails
        }, {
            path: '/tap-to-win',
            name: 'tapToWin',
            component: tapToWin
        }, {
            path: '/setting',
            name: 'setting',
            component: setting,
        }
    ]
})

export default router;