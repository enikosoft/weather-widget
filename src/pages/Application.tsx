import {useLayoutEffect, useState} from 'react';
import {Outlet, useLocation, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {mediaBreakpoints} from 'styles/styled';

import {useGoogleApiLoader} from 'hooks/useGoogleApiLoader';

import {useCityStore} from 'state/city';

import {detectLocation} from 'api/currentLocation';

import {AppLoader} from 'components/app-loader/AppLoader';
import Header from 'components/header/Header';
import Nav from 'components/nav/Nav';

import {City} from 'types/city';

const Application = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [city, setCity] = useCityStore((state) => [state.cityInContext, state.add]);

  const isLoaded = useGoogleApiLoader();

  const [loading, setLoading] = useState(true);

  const isFavorites = location.pathname.includes('favorites');

  useLayoutEffect(() => {
    if (isLoaded && !city) {
      detectLocation(fetchCityFromLocation);
    }

    if (city) {
      setLoading(false);
    }
  }, [isLoaded]);

  const fetchCityFromLocation = (city: City | null) => {
    if (city && !isFavorites) {
      setCity(city);
      navigate('/');
      setLoading(false);

      return;
    }

    setLoading(false);
    navigate('/welcome');
  };

  if (loading) {
    return <AppLoader />;
  }

  return (
    <>
      <Layout>
        <Nav />

        <Header />

        <section id="scrool-content">
          <Outlet />
        </section>
      </Layout>
    </>
  );
};

const Layout = styled.div`
  height: 100svh;
  width: 100vw;
  background: ${(props) => props.theme.background};
  padding: var(--p-root-layout-xl);
  padding-top: 0;
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (max-width: ${mediaBreakpoints.lg}px) {
    padding: var(--p-root-layout-sm);
    padding-top: 0;
  }

  #header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--h-header);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-top: var(--p-root-layout-xl);
    padding-left: calc(var(--w-nav) + var(--p-root-layout-xl) * 2);
    padding-right: var(--p-root-layout-xl);

    background: ${(props) => props.theme.background};
    font-family: ${(props) => props.theme.fontBoldFamily};
    color: ${(props) => props.theme.color};

    z-index: 99;

    @media screen and (max-width: ${mediaBreakpoints.lg}px) {
      padding-top: 0;
      padding-left: calc(var(--p-root-layout-sm) + var(--w-nav));
      padding-right: var(--p-root-layout-sm);
    }
  }

  #nav {
    position: fixed;
    top: var(--p-root-layout-xl);
    width: var(--w-nav);
    height: calc(100vh - 2 * var(--p-root-layout-xl));

    border-radius: var(--radius-medium);
    background: ${(props) => props.theme.navBg};

    z-index: 100;
  }

  #scrool-content {
    padding-left: calc(var(--w-nav) + var(--p-root-layout-xl));
    padding-top: calc(var(--h-header) + var(--p-root-layout-xl));

    @media screen and (max-width: ${mediaBreakpoints.lg}px) {
      padding-top: calc(var(--h-header) + var(--p-root-layout-sm));
      padding-left: 0;
    }
  }
`;

export default Application;
