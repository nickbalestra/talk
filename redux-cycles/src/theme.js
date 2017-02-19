import createTheme from "spectacle/lib/themes/default";

import Color from 'goethe';
import { black, navy, white } from './styles/colors';
import { fontFamily, fallback } from './styles/fonts';

const leftGradientColor = "#49D3DA"
const rightGradientColor = "#C3FF87"

const tertiary = Color('#58D3D8')

const theme = createTheme({
  primary: black.toString(),
  secondary: white.toString(),
  tertiary: tertiary.toString(),
  quartenary: navy.lighten(0.25).toString()
}, {
  primary: { name: fontFamily + ', ' + fallback, styles: [ 'normal', 'bold' ] },
  secondary: { name: fontFamily + ', ' + fallback, styles: [ 'normal', 'bold' ] }
});

// theme.screen.global.body.textShadow = `2px 2px 0 ${black.opacity(0.2)}`;

theme.screen.components.link = {
  textDecoration: 'none',
  color: tertiary.toString()
};

theme.screen.components.code = {
  ...theme.screen.components.code,
  color: navy.lighten(0.6),
  fontFamily: '"SourceCodePro", monospace'
};

theme.screen.components.quote = {
  ...theme.screen.components.quote,
  borderLeft: `1px solid ${tertiary.toString()}`,
  color: white.toString(),
};

theme.screen.components.listItem = {
  ...theme.screen.components.listItem,
  fontSize: '2rem'
};

theme.screen.components.codePane.pre = {
  ...theme.screen.components.codePane.pre,
  fontSize: '1rem',
  fontFamily: '"SourceCodePro", monospace'
};

theme.screen.progress.bar.container.height = '7px';
theme.screen.progress.bar.bar.background = `linear-gradient(90deg, ${leftGradientColor}, ${rightGradientColor})`;

export default theme;
