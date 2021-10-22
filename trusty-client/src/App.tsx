import { ReactElement } from 'react';

import { AppStyled } from './styled';
import Main from './components/Main';

function App(): ReactElement {
  return (
    <AppStyled>
      <Main />
    </AppStyled>
  );
}

export default App;
