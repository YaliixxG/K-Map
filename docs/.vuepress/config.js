module.exports = {
    title: 'YaliixxG ❤',
    description: '自我学习的前端知识点整理以及拓展和debug。',
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }]
    ],
    serviceWorker: true,
    plugins: {
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "发现新内容可用",
                buttonText: "刷新"
            }
        }
    },
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
                message: "内容已更新",
                buttonText: "刷新"
            }
        },
        nav: [
            { text: '首页', link: '/' },
            { text: '前言', link: '/Guide/' },
            { text: 'Hexo博客', link: 'https://yaliixxg.github.io' }
        ],
        sidebar: [
            {
                title: '前端',
                children: ['/FrontEnd/arcgis']
            },

            {
                title: '拓展',
                children: ['/Expand/python']
            },
            {
                title: 'DEBUG',
                children: [
                    '/debug/aboutTerminal',
                    '/debug/aboutReact',
                    '/debug/aboutMac'
                ]
            }
        ],
        sidebarDepth: 2,
        displayAllHeaders: true
    }
};
