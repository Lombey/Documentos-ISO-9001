'use strict';
const path = require('path');
const fs = require('fs');

const logoPath = path.resolve(__dirname, 'ISO9001/Logo/Logo Cuervo Corvus.png');
const logoBase64 = fs.readFileSync(logoPath).toString('base64');
const logoDataUrl = `data:image/png;base64,${logoBase64}`;

module.exports = {
  stylesheet: path.resolve(__dirname, 'reporte-estilo.css'),
  pdf_options: {
    format: 'A4',
    margin: { top: '3.5cm', right: '2cm', bottom: '2.5cm', left: '2cm' },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: `
      <div style="
        font-family: Helvetica, Arial, sans-serif;
        font-size: 9px;
        padding: 0 56px;
        width: 100%;
        border-bottom: 1px solid #ccc;
        padding-bottom: 6px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
      ">
        <div style="display: flex; align-items: center;">
          <img src="${logoDataUrl}" style="height: 35px; margin-right: 15px;" />
          <div>
            <span style="display: block; color: #333; font-weight: bold; font-size: 11px;">SGC Corvus S.R.L.</span>
            <span style="display: block; color: #666; font-size: 8px;">Sistema de Gestión de Calidad ISO 9001:2015</span>
          </div>
        </div>
      </div>
    `,
    footerTemplate: '<div></div>',
  },
  launch_options: {
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files'],
  },
};
