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
        <center>
          <h3>With heavy hearts, we announce FlutterVikings 2024 will not happen. Scheduling conflicts with other great community events have made it impossible to host the conference again. We're incredibly grateful for the amazing community of Flutter developers who have supported us💙</h3>
        </center>
        {/* <Schedules /> */}
        {/* <Scene /> */}
        {/* <Sponsors /> */}
        {/* <Speakers /> */}
        {/* <Venue /> */}
        {/* <TheEvent /> */}
        {/* <Diversity /> */}
        {/* <Moderators /> */}
        {/* <Communities /> */}
      </Layout>
    </NiceModal.Provider>
  );
};
