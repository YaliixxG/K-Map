module.exports = {
    title: 'YaliixxG ❤',
    description: '自我学习的前端知识点整理以及拓展和debug。',
    head: [['link', { rel: 'icon', href: '/favicon.png' }]],
    themeConfig: {
        repo: 'YaliixxG/K-Map',
        editLinks: true,
        editLinkText: '编辑页面',
        docsDir: 'docs',
        locales: {
            // 键名是该语言所属的子路径
            // 作为特例，默认语言可以使用 '/' 作为其路径。
            '/': {
                lang: 'zh-CN'
            }
        },
        lastUpdated: '上次更新',
        nav: [
            { text: '首页', link: '/' },
            { text: '前言', link: '/Guide/' },
            { text: 'Hexo博客', link: 'https://yaliixxg.github.io' }
        ],
        sidebar: [
            {
                title: '前端',
                children: ['/css/css1', '/css/css2']
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
