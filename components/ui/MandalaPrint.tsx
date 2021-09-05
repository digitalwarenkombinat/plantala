import { PureComponent } from 'react';

import Layout from '../Layout';
import AvatarShare from './AvatarShare';
import Mandala from './Mandala';

export class MandalaPrint extends PureComponent {
  render() {
    return (
      <Layout>
        <AvatarShare />
        <Mandala />
      </Layout>
    );
  }
}
