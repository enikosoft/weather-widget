import {BiSolidMoon} from 'react-icons/bi';
import {BsSun} from 'react-icons/bs';
import {useMediaQuery} from 'react-responsive';
import {Theme, mediaBreakpoints} from 'styles/styled';

import {useThemeStore} from 'state/theme';

import {Button, Wrapper} from './styles';

export const ThemeButton = () => {
  const {theme, changeTheme} = useThemeStore((state) => state);
  const isDarkTheme = theme === Theme.dark;

  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.lg}px)`,
  });

  const handleChangeTheme = (theme: Theme) => () => changeTheme(theme);

  return (
    <Wrapper>
      <div id="btn">
        <Button
          onClick={handleChangeTheme(Theme.light)}
          $isDark={isDarkTheme}
          className={`${!isDarkTheme ? 'active' : ''}`}
        >
          <>
            <BsSun />
            {!mobileAndTablet && <div className="label">Ligth</div>}
          </>
        </Button>
        <Button
          onClick={handleChangeTheme(Theme.dark)}
          $isDark={isDarkTheme}
          className={`${isDarkTheme ? 'active' : ''}`}
        >
          <>
            <BiSolidMoon />
            {!mobileAndTablet && <div className="label">Dark</div>}
          </>
        </Button>
      </div>
    </Wrapper>
  );
};
