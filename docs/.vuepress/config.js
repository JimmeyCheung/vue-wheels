const path = require("path");
module.exports = {
  base: "/vue-wheels/",
  title: "jimmey-wheel",
  description: "一个好用的UI框架",
  themeConfig: {
    nav: [
      {
        text: "主页",
        link: "/",
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
    sidebar: [
      {
        title: "入门",
        collapsable: false,
        children: ["/install/", "/get-started/"],
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
