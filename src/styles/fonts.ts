import {createGlobalStyle} from 'styled-components';

import NotoSansBoldEot from 'assets/fonts/NotoSans/NotoSans-Bold.eot';
import NotoSansBoldSvg from 'assets/fonts/NotoSans/NotoSans-Bold.svg';
import NotoSansBoldWoff from 'assets/fonts/NotoSans/NotoSans-Bold.woff';
import NotoSansBoldWoff2 from 'assets/fonts/NotoSans/NotoSans-Bold.woff2';
import NotoSansRegularEot from 'assets/fonts/NotoSans/NotoSans-Regular.eot';
import NotoSansRegularSvg from 'assets/fonts/NotoSans/NotoSans-Regular.svg';
import NotoSansRegularWoff from 'assets/fonts/NotoSans/NotoSans-Regular.woff';
import NotoSansRegularWoff2 from 'assets/fonts/NotoSans/NotoSans-Regular.woff2';

export const FontsStyle = createGlobalStyle`
  @font-face {
    font-family: 'NotoSans Regular';
    src:  url(${NotoSansRegularEot});
    src:  local('NotoSans Regular'),
          url(${NotoSansRegularWoff2}) format('woff2'),
          url(${NotoSansRegularWoff}) format('woff'),
          url(${NotoSansRegularSvg}) format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'NotoSans Bold';
    src:  url(${NotoSansBoldEot});
    src:  local('NotoSans Bold'),
          url(${NotoSansBoldWoff2}) format('woff2'),
          url(${NotoSansBoldWoff}) format('woff'),
          url(${NotoSansBoldSvg}) format('svg');
    font-weight: bold;
    font-style: normal;
  }

`;
