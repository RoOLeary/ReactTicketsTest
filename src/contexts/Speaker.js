import React, { createContext, useState } from 'react';

// import { SpeakerModal } from '../components';

const initialState = {
  visible: false,
  ticket: null,
};

const ModalContext = createContext([initialState, {}]);

export const ModalProvider = ({ children }) => {
  const [visible, setVisible] = useState(initialState.visible);
  const [ticket, setTicket] = useState(initialState.ticket);

  const show = (s) => {
    setTicket(s);
    setVisible(true);
  };
  const hide = () => setVisible(false);

  const state = { visible, ticket };
  const handlers = { show, hide };

  return (
    <ModalContext.Provider value={[state, handlers]}>
      {children}
      <TicketModal {...ticket} visible={visible} />
    </ModalContext.Provider>
  );
};

export default ModalContext;
