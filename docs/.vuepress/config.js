const plugins = require('../../config/pluginConf.js');
const nav = require('../../config/navConf.js');
const sidebar = require('../../config/sidebarConf.js');

module.exports = {
    title: 'YaliixxG ❤',
    description: '自我学习的前端知识点整理以及拓展和debug。',
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }]
    ],
    serviceWorker: true,
    plugins: plugins,
    themeConfig: {
        repo: 'YaliixxG/K-Map',
        editLinks: true,
        editLinkText: '编辑页面',
        docsDir: 'docs',
        lastUpdated: '最近更新',
        locales: {
            // 键名是该语言所属的子路径
            // 作为特例，默认语言可以使用 '/' 作为其路径。
            '/': {
                lang: 'zh-CN'
            }
        },
        lastUpdated: '上次更新',
        serviceWorker: {
            updatePopup: {
                message: '内容已更新',
                buttonText: '刷新'
            }
        },
        nav: nav,
        sidebar: sidebar,
        sidebarDepth: 2,
        displayAllHeaders: true
    }
};
