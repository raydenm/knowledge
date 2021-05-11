const packageInfo = require("../package.json");

function genHeadContent() {
  const { name = "", description = "", keywords = [], author = "" } = packageInfo;
  return `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>web</title>
    <style>
      html, body {
        height: 100%;
        padding:0;
        margin:0;
      }
      #markmap {
        height: 100%;
      }
      @media (max-width: 414px) {
        #markmap {
          height: 100%;
        }
      }
    </style>
  </head>`;
}

function genTpl(root = {}, styles = [], scripts = []) {
  const headContent = genHeadContent();

  return `<!DOCTYPE html>
    <html>
      <head>${headContent}</head>
      <body>
        <svg id="markmap" style="width: 100%;"></svg>
        <script src="https://cdn.jsdelivr.net/npm/d3@6"></script>
        <script src="https://cdn.jsdelivr.net/npm/markmap-view"></script>
        <script>
          const { Markmap, loadCSS, loadJS } = window.markmap;
          const styles = ${JSON.stringify(styles)};
          const scripts = ${JSON.stringify(scripts)};
          const root = ${JSON.stringify(root)};

          // 1. load assets
          if (styles && styles.length) loadCSS(styles);
          if (scripts && scripts.length) loadJS(scripts, { getMarkmap: () => window.markmap });

          // 2. create markmap
          Markmap.create('#markmap', null, root);

          // or pass an SVG element directly
          const svgEl = document.querySelector('#markmap');
          Markmap.create(svgEl, null, data);
        </script>
      </body>
    </html>`;
}

module.exports = {
  genTpl,
};
