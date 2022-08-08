import React from 'react';
import {
  Layout,
  TheEvent,
  Scene,
  Sponsors,
  Speakers,
  Diversity,
  Schedules,
} from '../components';
import { SEO } from '../components/base/SEO';
import { Venue } from '../components/modules/Venue';
import NiceModal from '@ebay/nice-modal-react';

export default () => {
  return (
    <NiceModal.Provider>
      <Layout>
        <SEO />
        <Scene />
        <TheEvent />
        <Diversity />
        <Speakers />
        <Schedules />
        {/* <Moderators /> */}
        <Sponsors />
        {/* <Communities /> */}
        <Venue />
      </Layout>
    </NiceModal.Provider>
  );
};