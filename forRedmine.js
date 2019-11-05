#!/usr/bin/env node

const pandoc = require('pandoc-filter');
const RawBlock = pandoc.RawBlock;

const action = (key, value, format, meta) => {
  if (key === 'CodeBlock') {
//    [ [, lang, ], code ] = value;
lang = value[0][1];
code = value[1];
    const syntax = (lang.length) ? ' class="${lang}"' : '';
    return RawBlock('html', '<pre><code${syntax}>${code}</code></pre>\n');
  }
}

pandoc.toJSONFilter(action);
