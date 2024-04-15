import {createBrowserRouter} from 'react-router-dom';

import {queryClient} from 'providers/ReactQueryProvider';

import {favoritesLoader} from 'api/bulkWeather';
import {cityWeatherLoader} from 'api/weather';

import Application from 'pages/Application';
import Dashboard from 'pages/dashboard/Dashboard';
import {Favorite} from 'pages/favorite/Favorite';
import Welcome from 'pages/welcome/Welcome';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Application />,
    children: [
      {
        path: '',
        element: <Dashboard />,
        loader: cityWeatherLoader(queryClient),
      },
      {
        path: 'favorites',
        element: <Favorite />,
        loader: favoritesLoader(queryClient),
      },
    ],
  },
  {
    path: '/welcome',
    element: <Welcome />,
  },
]);

export default routes;
