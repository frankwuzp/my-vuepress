module.exports = {
  "title": "米斯特乌的主页",
  "description": "记录生活，改善世界",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/whale-32x32.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
//      {
//        "text": "文档",
//        "icon": "reco-message",
//        "items": [
//          {
//            "text": "文件夹",
//            "link": "/docs/theme-reco/"
//          }
//        ]
//      },
      {
        "text": "开源",
        "icon": "reco-api",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/frankwuzp",
            "icon": "reco-github"
          },
          {
            "text": "Coding",
            "link": "https://frankwuzp.coding.net",
            "icon": "reco-coding"
          },
          {
            "text": "Gitee",
            "link": "https://gitee.com/frankwuzp",
            "icon": "reco-mayun"
          },
          {
            "text": "Gitlab",
            "link": "https://gitlab.com/frankwuzp",
            "icon": "reco-gitlab"
          },
          {
            "text": "Email",
            "link": "mailto:me@wuzhiping.top",
            "icon": "reco-mail"
          },
        ]
      },
      {
        "text": "实验室",
        "icon": "reco-category",
        "items": [
          {
            "text": "👨‍💻 Matrix",
            "link": "https://m.wuzhiping.top/matrix/",
          },
          {"text": "💕 情侣碎碎念",
           "link": "https://m.wuzhiping.top/mylove"
          },
        ]
      },
      {
        "text": "关于",
        "icon": "reco-message",
        "link": "/docs/about",
      },
    ],
//    "sidebar": {
//      "/docs/theme-reco/": [
//        "",
//        "theme",
//        "plugin",
//        "api"
//      ]
//    },
//    "type": "blog",
//    "blogConfig": {
//      "category": {
//        "location": 2,
//        "text": "分类"
//      },
//      "tag": {
//        "location": 3,
//        "text": "标签"
//      }
//    },
//    "friendLink": [
//      {
//        "title": "午后南杂",
//        "desc": "Enjoy when you can, and endure when you must.",
//        "email": "1156743527@qq.com",
//        "link": "https://www.recoluan.com"
//      },
//      {
//        "title": "vuepress-theme-reco",
//        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
//        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
//        "link": "https://vuepress-theme-reco.recoluan.com"
//      }
//    ],
      //首页头像
//    "logo": "/whale-logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "米斯特乌",
    "authorAvatar": "/whale-icon.png",
    "record": "粤ICP备2021089570号",
    "recordLink": 'https://beian.miit.gov.cn/#/Integrated/index',
    "startYear": "2021",
  },
  "markdown": {
    "lineNumbers": true
  }
}
