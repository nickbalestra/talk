import 'sanitize.css/sanitize.css';
import './css/main.css';

// Playground
import './css/playground.css';

// CodeMirror
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';

// Prism JS
import 'prism-themes/themes/prism-atom-dark.css';
import 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';

import React from 'react';
import { render } from 'react-dom';
import Presentation from './Presentation';

render(<Presentation />, document.getElementById('root'));
