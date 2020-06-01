import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: { className: 'header0-logo', children: 'https://assets.dtstack.com/2019Website/index/v2020/logo_blue.png' },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '#',
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
        subItem: null,
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '#',
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
        name: 'item2',
        className: 'header0-item',
        children: {
          href: '#',
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
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>
                    <br />
                  </p>
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
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title kavwq2y76lb-editor_css',
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
        <p>基于 antd 开发的业务组件库</p>
      </span>
    ),
  },
  button: {
    className: 'banner0-button',
    children: (
      <span>
        <p>开始使用</p>
      </span>
    ),
  },
};
export const Feature00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>特性</p>
          </span>
        ),
      },
    ],
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
                  <p>快速使用</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>安装即可使用以及详细的文档介绍</p>
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
                  <span>
                    <span>
                      <p>
                        按需引入<br />
                      </p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <span>
                    <p>支持组件按需引入</p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Footer20DataSource = {
  wrapper: { className: 'home-page-wrapper footer2-wrapper' },
  OverPack: { className: 'home-page footer2', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: [
      { name: 'image', children: '', className: 'copyright-logo' },
      {
        name: 'group',
        children: (
          <span>
            <p>
              <br />
            </p>
          </span>
        ),
        className: 'copyright-group',
      },
      {
        name: 'copyright',
        children: (
          <span>
            <p>Copyright © 数栈前端</p>
          </span>
        ),
        className: 'copyright-text',
      },
    ],
  },
  links: {
    className: 'links',
    children: [
      {
        name: 'zhihu',
        href: 'https://zhuanlan.zhihu.com/c_109929958',
        className: 'links-zhihu',
        children:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSIyMXB4IiB2aWV3Qm94PSIwIDAgMjEgMjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7nn6XkuY48L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjQiPgogICAgICAgIDxnIGlkPSLpobXohJoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTQuMDAwMDAwLCAtMjEuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9IuefpeS5jiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE0LjAwMDAwMCwgMjEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi43Nzg1ODQ2MSwxMS43MjI5IEwxMS4yOTA5Nzg1LDExLjcyMjkgQzExLjI5MDk3ODUsMTAuNjQ0OSAxMC43OTEyODYyLDEwLjAxMzUgMTAuNzkxMjg2MiwxMC4wMTM1IEw2Ljg3NDM4NzcsMTAuMDEzNSBDNi45Njc0MzM4NSw4LjA2MTE5OTk5IDcuMDUwODMwNzcsNS41NTU4OTk5OSA3LjA4MTE1NjkzLDQuNjI0ODk5OTkgTDEwLjgwNjQ0OTIsNC42MjQ4OTk5OSBDMTAuODA2NDQ5Miw0LjYyNDg5OTk5IDEwLjc4NTc3MjMsMy4wMjQgMTAuMzcyMjMzOCwzLjAyNCBMMy44MjI0NzM4NSwzLjAyNCBDMy44MjI0NzM4NSwzLjAyNCA0LjIxNjcxMzg0LDAuOTMwMyA0Ljc0MTkwNzY5LDAuMDA1NjAwMDA2ODQgQzQuNzQxOTA3NjksMC4wMDU2MDAwMDY4NCAyLjc4NjU1OTk5LC0wLjEwMTQ5OTk5MyAyLjExOTM4NDYyLDIuNTQ2NjAwMDEgQzEuNDUyMjA5MjQsNS4xOTQ3MDAwMSAwLjQ1MjEzNTM5MSw2Ljc5NTYgMC4zNDY2ODMwODQsNy4wODgxOTk5OSBDMC4yNDA1NDE1NTIsNy4zODA3OTk5OSAwLjkyMjE5MDc2OSw3LjIyNjc5OTk5IDEuMjEwMjg5MjIsNy4wODgxOTk5OSBDMS40OTgzODc2OCw2Ljk0OTU5OTk5IDIuODAyNDEyMyw2LjQ3MjIgMy4xODE0ODkyNCw0LjYyNDg5OTk5IEw1LjIwNTc2MDAxLDQuNjI0ODk5OTkgQzUuMjMzMzI5MjMsNS43OTYgNS4zMTMyODAwMSw5LjM4NDE5OTk5IDUuMjg4NDY3NywxMC4wMTM1IEwxLjExOTMxMDc2LDEwLjAxMzUgQzAuNTI3OTUwNzYzLDEwLjQ0NDcgMC4zMzE1MTk5OTMsMTEuNzIyOSAwLjMzMTUxOTk5MywxMS43MjI5IEw1LjA5NjE3MjMxLDExLjcyMjkgQzQuODk2OTg0NjMsMTMuMDU5MiA0LjU0ODIzMzg1LDE0Ljc4MTkgNC4wNjAyNTg0NywxNS42OTQ3IEMzLjI4NzYzMDc3LDE3LjE0MyAyLjg3ODIyNzY5LDE4LjQ2NjcgMC4wODk1OTk5OTMzLDIwLjc0NDUgQzAuMDg5NTk5OTkzMywyMC43NDQ1IC0wLjM2NTI5MjMxNCwyMS4wODMzIDEuMDQ0MTg0NjIsMjAuOTYwMSBDMi40NTQzNTA3NywyMC44MzY5IDMuNzg4MDEyMzEsMjAuNDY3MyA0LjcxMjk1OTk5LDE4LjU4OTIgQzUuMjU1MTIxMjcsMTcuNDY5MTYwNiA1LjcxMTU5MTYsMTYuMzA4Mzk4NyA2LjA3ODMyNjE2LDE1LjExNzIgTDYuMDc2OTQ3NjksMTUuMTIyMSBMMTAuMDAzNDk1NCwxOS43MTM0IEMxMC4wMDM0OTU0LDE5LjcxMzQgMTAuNTE5MDQsMTguNDgxNCAxMC4xMzk5NjMxLDE3LjEyNjkgTDcuMjI5MzQxNTMsMTMuODE1OSBMNi4yNDM3NDE1NSwxNC41NTY1IEw2LjI0MzA1MjMsMTQuNTYgQzYuNTE2Njc2OTEsMTMuNTg1NiA2LjcxMzEwNzY4LDEyLjYyMjQgNi43NzQ0NDkyMiwxMS43ODQ1IEw2Ljc3OTI3Mzg1LDExLjcyMjkgTDYuNzc4NTg0NjEsMTEuNzIyOSBaIE0xMi4yMzEwODkyLDIuNjg1MjAwMDEgTDEyLjIzMTA4OTIsMTguNTczOCBMMTMuODc1NTkzOSwxOC41NzM4IEwxNC41NDk2NjE1LDIwLjQ4NjkgTDE3LjQwMDMyLDE4LjU3MzggTDIwLjk5MzI4LDE4LjU3MzggTDIwLjk5MzI4LDIuNjg1MjAwMDEgTDEyLjIzMTA4OTIsMi42ODUyMDAwMSBaIE0xOS4zMDA1MjkyLDE2Ljg2NTEgTDE3LjQzMjcxMzgsMTYuODY1MSBMMTUuMTAzODAzMSwxOC40Mjc1IEwxNC41NTMxMDc3LDE2Ljg2NTEgTDEzLjk3MjA4NjEsMTYuODY1MSBMMTMuOTcyMDg2MSw0LjQ1ODMgTDE5LjI5OTg0LDQuNDU4MyBMMTkuMjk5ODQsMTYuODY1MSBMMTkuMzAwNTI5MiwxNi44NjUxIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
      },
    ],
  },
};
