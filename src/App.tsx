import {RouterProvider} from 'react-router-dom';
import routes from 'routes';

import {AppProvider} from 'providers/AppProvider';
import {MobileMenuProvider} from 'providers/MobileProvider';
import {StyleProvider} from 'providers/StyleProvider';

const App = () => {
  return (
    <StyleProvider>
      <AppProvider>
        <MobileMenuProvider>
          <RouterProvider router={routes} />
        </MobileMenuProvider>
      </AppProvider>
    </StyleProvider>
  );
};

export default App;
