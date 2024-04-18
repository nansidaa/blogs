(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{543:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SSR")]),s._v(" 服务端渲染请求数据和拼装都在服务端完成 比如 nuxtJs nextjs\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CSR")]),s._v(" 就是在客户端渲染的 比如vue react\n")])])]),t("h2",{attrs:{id:"csr-和-ssr-区别。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#csr-和-ssr-区别。"}},[s._v("#")]),s._v(" 📒 CSR 和 SSR 区别。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("页面加载方式：\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CSR")]),s._v("：在 "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CSR")]),s._v(" 中，服务器返回一个初始的 "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTML")]),s._v(" 页面，然后浏览器下载并执行 JavaScript 文件，JavaScript 负责动态生成并更新页面内容。这意味着初始页面加载时，内容较少，页面结构和样式可能存在一定的延迟。\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SSR")]),s._v("：在 "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SSR")]),s._v(" 中，服务器在返回给浏览器之前，会预先在服务器端生成完整的 "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTML")]),s._v(" 页面，包含了初始的页面内容。浏览器接收到的是已经渲染好的 "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTML")]),s._v(" 页面，因此初始加载的速度较快。\n内容生成和渲染：\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CSR")]),s._v("：在 "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CSR")]),s._v(" 中，页面的内容生成和渲染是由客户端的 JavaScript 脚本负责的。当数据变化时，JavaScript 会重新生成并更新 "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),s._v("，从而实现内容的动态变化。这种方式使得前端开发更加灵活，可以创建复杂的交互和动画效果。\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SSR")]),s._v("：在 "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SSR")]),s._v(" 中，服务器在渲染页面时会执行应用程序的代码，并生成最终的 "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTML")]),s._v(" 页面。这意味着页面的初始内容是由服务器生成的，对于一些静态或少变的内容，可以提供更好的首次加载性能。\n用户交互和体验：\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CSR")]),s._v("：在 "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CSR")]),s._v(" 中，一旦初始页面加载完成，后续的用户交互通常是通过 "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AJAX")]),s._v(" 或 WebSocket 与服务器进行数据交互，然后通过 JavaScript 更新页面内容。这种方式可以提供更快的页面切换和响应速度，但对于搜索引擎爬虫和 "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SEO")]),s._v("（搜索引擎优化）来说，可能需要一些额外的处理。\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SSR")]),s._v("：在 "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SSR")]),s._v(" 中，由于页面的初始内容是由服务器生成的，因此用户交互可以直接在服务器上执行，然后服务器返回更新后的页面。这样可以提供更好的首次加载性能和对搜索引擎友好的内容。\n\n")])])]),t("h2",{attrs:{id:"seo-搜索引擎优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#seo-搜索引擎优化"}},[s._v("#")]),s._v(" 📒 SEO(搜索引擎优化)")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CSR")]),s._v("应用对"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SEO")]),s._v("并不是很友好：因为在首次加载的时候获取"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTML")]),s._v(" 信息较少 搜索引擎爬虫可能无法获取完整的页面内容\n而"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SSR")]),s._v("就不一样了 由于 "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SSR")]),s._v(" 在服务器端预先生成完整的 "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTML")]),s._v(" 页面，搜索引擎爬虫可以直接获取到完整的页面内容。这有助于搜索引擎正确理解和评估页面的内容\n \n \n哪些网站适合做"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CSR")]),s._v(" 哪些适合做"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SSR")]),s._v("：\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CSR")]),s._v(" 应用例如 ToB 后台管理系统 大屏可视化 都可以采用"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CSR")]),s._v("渲染不需要很高的"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SEO")]),s._v("支持\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SSR")]),s._v(" 应用例如 内容密集型应用大部分是ToC 新闻网站 ，博客网站，电子商务，门户网站需要更高的"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SEO")]),s._v("支持\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);