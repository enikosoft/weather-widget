import {ReactNode} from 'react';
import {useMediaQuery} from 'react-responsive';
import {ThemeProvider} from 'styled-components';
import {Theme, mediaBreakpoints} from 'styles/styled';

import {useThemeStore} from 'state/theme';

import {CardTitle, StyledCardWrapper} from './styles';

interface Props {
  padding?: number;
  noPadding?: boolean;
  title?: string;
  titleSize?: number;
  children: ReactNode;
  clickable?: boolean;
  onClick?(): void;
}

export const Card = (props: Props) => {
  const mobile = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.sm}px)`,
  });

  const theme = useThemeStore((state) => state.theme);
  const {titleSize = 16, title, children, padding = 40, clickable, onClick, noPadding} = props;

  const styles = {
    padding: noPadding ? '0' : mobile && !noPadding ? '16px' : `${padding}px`,
    titleSize: `${titleSize}px`,
    ...(clickable ? {hoverBorder: `1px solid`} : {}),
    ...(theme === Theme.light ? {boxShadow: `0px 0px 12px 11px rgba(245, 245, 245, 1)`} : {}),
  };

  const handleOnlcik = () => {
    if (clickable && onClick) {
      onClick();
    }
  };

  return (
    <ThemeProvider theme={{...styles}}>
      <StyledCardWrapper onClick={handleOnlcik}>
        {!!title?.length && <CardTitle>{title}</CardTitle>}
        <div className="card-body">{children}</div>
      </StyledCardWrapper>
    </ThemeProvider>
  );
};
