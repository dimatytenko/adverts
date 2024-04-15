import 'modern-normalize';

import './styles/styles.scss';
import Layout from './containers/Layout';
import RoutesSwitch from './Router';

function App() {
  return (
    <>
      <Layout>
        <RoutesSwitch />
      </Layout>
    </>
  );
}

export default App;
