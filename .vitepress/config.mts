import { defineConfig } from "vitepress";
import { withI18n } from "vitepress-i18n";
import { withSidebar } from "vitepress-sidebar";

const vitePressI18nOptions = {
  locales: ["zhHans"],
};

// https://vitepress.dev/reference/site-config
export default defineConfig(
  withI18n(
    withSidebar(
      {
        title: "计算机科学简介",
        description: "一份简要介绍计算机科学及其各个有关方面的文档",
        themeConfig: {
          // https://vitepress.dev/reference/default-theme-config
          nav: [
            { text: "首页", link: "/" },
            { text: "文档", link: "/preface" },
          ],
          socialLinks: [
            {
              icon: "github",
              link: "https://github.com/ResetPower26/intro-computer-science",
            },
          ],
        },
        markdown: {
          math: true,
        },
      },
      {
        useTitleFromFrontmatter: true,
        useFolderTitleFromIndexFile: true,
        collapsed: false,
        sortMenusByFrontmatterOrder: true,
        excludeByGlobPattern: ["README.md"],
      },
    ),
    vitePressI18nOptions,
  ),
);
