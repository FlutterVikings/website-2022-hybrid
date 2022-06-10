import React from 'react';
import styled from 'styled-components';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Modal } from 'antd';

import { TitoSpeaker, useTito } from '../hooks/useTito';
import spacetime from 'spacetime';

const SpeakerRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const SpeakerImage = styled.div`
  flex: 1;
  > img {
    border-radius: 50%;
  }
`;
const SpeakerInfo = styled.div`
  padding: 0 4rem;
  flex: 1;
`;

export const SpeakerModal = NiceModal.create(({ speaker }: { speaker: TitoSpeaker }) => {
  const modal = useModal();
  return (
    <Modal
      footer={null}
      title={speaker.fullName}
      visible={modal.visible}
      onOk={modal.hide}
      cancelText="close"
      onCancel={modal.hide}
      afterClose={modal.remove}
    >
      <Speaker speaker={speaker} />
    </Modal>
  );
});

const Speaker = ({ speaker }: { speaker: TitoSpeaker }) => {
  const { sessions, rooms } = useTito();
  const findSessionById = (id: number) => {
    return sessions.find((s) => s.id === id.toString());
  };
  const findRoomById = (id: number) => {
    return rooms.find((s) => s.id === id);
  };
  return (
    <>
      <SpeakerRow>
        <SpeakerImage>
          <img src={speaker.profilePicture} alt={speaker.fullName} />
        </SpeakerImage>
        <SpeakerInfo>
          <h2 className="font__caesar">{speaker.fullName}</h2>
          {speaker.tagLine && (
            <p>
              <b>{speaker.tagLine}</b>
            </p>
          )}
          <br />
          {speaker.links?.length > 0 &&
            speaker.links.map((l, i) => {
              return (
                <span key={l.linkType + i}>
                  <a rel="noopener noreferrer nofollow" target="_blank" href={l.url}>
                    {l.linkType === 'Twitter' && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    )}{' '}
                    {l.linkType === 'LinkedIn' && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    )}
                  </a>
                </span>
              );
            })}
        </SpeakerInfo>
      </SpeakerRow>
      <SpeakerRow>
        <div>
          <br />
          {speaker.bio}
          <br />
          <br />
          <h2 className="font__caesar">Talk</h2>
          {speaker.sessions.map((s) => {
            const session = findSessionById(s);
            const room = session ? findRoomById(session?.roomId) : null;
            return session && room ? (
              <div key={s}>
                <h2>{session.title}</h2>
                <p>
                  <b>
                    {spacetime(session.startsAt).goto('Europe/Oslo').format('nice-full')}{' '}
                    in <span className="font__caesar">{room.name}</span>
                  </b>
                </p>
                <br />
                <p
                  dangerouslySetInnerHTML={{
                    __html: session.description ?? '',
                  }}
                />
              </div>
            ) : null;
          })}
        </div>
      </SpeakerRow>
    </>
  );
};
