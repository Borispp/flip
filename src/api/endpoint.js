import io from 'socket.io-client';

export const BACKEND_URL = 'https://app.cryptomdl.com';
export const TIMEOUT_BACKEND_REQUEST = 90 * 1000;

let socket = null;
let socketAll = null;
// let walletAddress = null;

const getSocket = (wallet_address) => {
  if (wallet_address) {
    // walletAddress = wallet_address;
    socket = io(BACKEND_URL, {
      query: {
        wallet_address
      },
      timeout: TIMEOUT_BACKEND_REQUEST,
      transports: process.env.NODE_ENV === 'production' ? ['polling', 'websocket'] : ['websocket'],
    });
  }
  return socket;
};

const getSocketAll = () => {
  if (!socketAll) {
    socketAll = io(BACKEND_URL, {
      timeout: TIMEOUT_BACKEND_REQUEST,
      transports: process.env.NODE_ENV === 'production' ? ['polling', 'websocket'] : ['websocket'],
    });
  }
  return socketAll;
};

export default {
  socket: (wallet_address) => {
    return getSocket(wallet_address);
  },
  socketAll: getSocketAll(),
};
