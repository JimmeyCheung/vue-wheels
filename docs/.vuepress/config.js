const path = require("path");
module.exports = {
    base: "/vue-wheels/",
    title: "吉米 UI",
    description: "一个让你爱不释手的 Vue UI 框架",
    themeConfig: {
        nav: [{
                text: "主页",
                link: "/introduction/",
            },
            {
                text: "文档",
                link: "/install/",
            },
            {
                text: "github",
                link: "https://github.com/JimmeyCheung/vue-wheels/",
            },
        ],
        sidebar: [{
                title: "指南",
                collapsable: false,
                children: ["/introduction/", "/install/", "/get-started/"],
            },
            {
                title: "组件",
                collapsable: false,
                children: [
                    "/components/button",
                    "/components/tabs",
                    "/components/input",
                    "/components/grid",
                    "/components/layout",
                    "/components/toast",
                    "/components/popover",
                    "/components/slides",
                ],
            },
        ],
    },
    scss: {
        includePaths: [path.join(__dirname, "../../styles")],
    },
};