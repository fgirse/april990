// FlyonuiScript.tsx
'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Optional third-party libraries
import $ from 'jquery';
import _ from 'lodash';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import 'datatables.net';
import 'datatables.net-dt/js/dataTables.dataTables.js';

// Extend JQuery type to include dataTable
declare global {
  interface JQuery {
    dataTable: any;
  }
  interface Window {
    noUiSlider: typeof noUiSlider;
    DataTable: typeof $.fn.dataTable;
    jQuery: typeof $;
    $: typeof $;
    _: typeof _;
  }
}
import 'dropzone/dist/dropzone-min.js';

window.$ = $;
window._ = _;
window.jQuery = $;
window.DataTable = $.fn.dataTable;

window.noUiSlider = noUiSlider;

const dataTable = (window as any).dataTable;

async function loadFlyonUI() {
  return import('flyonui/flyonui');
}

export default function FlyonuiScript() {
  const path = usePathname();

  useEffect(() => {
    const initFlyonUI = async () => {
      await loadFlyonUI();
    };

    initFlyonUI();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (
        window.HSStaticMethods &&
        typeof window.HSStaticMethods.autoInit === 'function'
      ) {
        window.HSStaticMethods.autoInit();
      }
    }, 100);
  }, [path]);

  // Use it directly without window object
  const slider = document.getElementById('slider');
  if (slider) {
    noUiSlider.create(slider, {
      start: [20, 80],
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
    });
  }

  return null;
}