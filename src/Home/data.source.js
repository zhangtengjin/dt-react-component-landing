import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://assets.dtstack.com/2019Website/index/v2020/logo_white.png',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: 'http://dtux.dtstack.com:9001/?path=/story/%E7%BB%BC%E8%BF%B0--%E4%BB%8B%E7%BB%8D',
          children: [
            {
              children: (
                <span>
                  <p>首页</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item2',
        className: 'header0-item',
        children: {
          href: 'http://dtux.dtstack.com:9001/?path=/story/circle--circle',
          children: [
            {
              children: (
                <span>
                  <p>组件</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: 'http://gitlab.prod.dtstack.cn/dt-insight-front/infrastructure/dt-react-component',
          children: [
            {
              children: (
                <span>
                  <p>GITLAB</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner00DataSource = {
  wrapper: { className: 'banner0 kaw4dk20zim-editor_css' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title kaw4i04uyb9-editor_css',
    children: (
      <span>
        <p>dt-react-component</p>
      </span>
    ),
  },
  content: {
    className: 'banner0-content',
    children: (
      <span>
        <p>基于 ant-design 开发的数栈业务组件库</p>
      </span>
    ),
  },
  button: {
    className: 'banner0-button banner0-btn__color',
    children: (
      <span>
        <a target='_blank' href='http://dtux.dtstack.com:9001'>开始使用</a>
      </span>
    ),
  },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '产品与服务' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <span>
                    <p>快速使用</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <span>
                    <p>安装即可使用以及详细的文档介绍</p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>丰富组件</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>覆盖常用业务型组件</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>按需引入</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>支持组件按需引入</p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <span>
          <span>
            <span>
              <span>
                <span>
                  <span>
                    <p>数栈前端</p>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <span>
          <span>
            <span>
              <p>
                <span>致力于创造、提供更好的 Web 交互体验</span>
              </p>
              <p>
                目前主要支撑数栈子产品的迭代开发<span>
                  <br />
                </span>
              </p>
            </span>
          </span>
        </span>
      </span>
    ),
  },
};
export const Footer01DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <span>
          ©{new Date().getFullYear()} <a target="_blank" href="http://gitlab.prod.dtstack.cn/">数栈前端组</a> All Rights
          Reserved
        </span>
      </span>
    ),
  },
};
