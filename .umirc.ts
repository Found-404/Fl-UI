import { defineConfig } from 'dumi';
// import style from './docs/siteIndexStyle';

export default defineConfig({
  title: 'react-view-design', // 你的组件库名字
  // 你的网站 tabs 图片
  favicon: 'https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/%E7%BD%91%E7%AB%99%E5%A4%B4%E5%83%8F.png',
  // 你的官网logo  
  logo: 'https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/%E7%BD%91%E7%AB%99%E5%A4%B4%E5%83%8F.png',
  outputPath: 'docs-dist',
  mode: 'site',
  apiParser: {
    // 自定义属性过滤配置，也可以是一个函数，用法参考：https://github.com/styleguidist/react-docgen-typescript/#propfilter
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
      // 需要忽略的属性名列表，默认为空数组
      skipPropsWithName: ['autoFocus', 'form', 'formAction', 'formEncType', 'title'],
      // 是否忽略没有文档说明的属性，默认值为 false
      skipPropsWithoutDoc: true,
    },
  },
  history: {
    type: 'hash',
  },
  // 配置你想配置一级导航
  navs: [
    null,
    {
      title: '作者',
      children: [
        {
          title: 'CSDN',
          path: 'https://blog.csdn.net/CarrreyYan_979292?type=blog',
        },
        {
          title: '掘金',
          path: 'https://juejin.cn/user/1785262616087192',
        },
      ],
    },
    {
      title: 'GitHub',
      path: 'https://github.com/yq979292/Fluent-design0',
    },
  ],
  // styles: [style],
  themeConfig: {
    carrier: 'dumi', // 设备状态栏左侧的文本内容
    hd: true,
  },
});