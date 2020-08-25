import React, { createContext, useState } from 'react';

// import { SpeakerModal } from '../components';

const initialState = {
  visible: false,
  speaker: null,
};

const ModalContext = createContext([initialState, {}]);

export const ModalProvider = ({ children }) => {
  const [visible, setVisible] = useState(initialState.visible);
  const [speaker, setSpeaker] = useState(initialState.speaker);

  const show = (s) => {
    setSpeaker(s);
    setVisible(true);
  };
  const hide = () => setVisible(false);

  const state = { visible, speaker };
  const handlers = { show, hide };

  return (
    <ModalContext.Provider value={[state, handlers]}>
      {children}
      <SpeakerModal {...speaker} visible={visible} />
    </ModalContext.Provider>
  );
};

export default ModalContext;
