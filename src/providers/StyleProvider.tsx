import {ReactNode} from 'react';
import {ThemeProvider} from 'styled-components';
import {FontsStyle} from 'styles/fonts';
import {ResetStyles} from 'styles/reset-styles';
import {GlobalStyle, defaultTheme} from 'styles/styled';

import {useThemeStore} from 'state/theme';

export const StyleProvider = ({children}: {children: ReactNode}) => {
  const {theme} = useThemeStore();

  return (
    <>
      <ResetStyles />
      <FontsStyle />
      <ThemeProvider theme={defaultTheme[theme]}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  );
};
