import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import { sepolia } from 'wagmi/chains';

const myCustomChain = {
  id: 50312, // chain ID
  name: 'Somnia Testnet',
  network: 'Somnia',
  nativeCurrency: {
    decimals: 18,
    name: 'Somnia Testnet',
    symbol: 'STT',
  },
  rpcUrls: {
    default: { http: ['https://dream-rpc.somnia.network'] },
    public: { http: ['https://dream-rpc.somnia.network'] },
  },
  blockExplorers: {
    default: { name: 'shannon', url: 'https://shannon-explorer.somnia.network' },
  },
  testnet: true,
};

export const wagmi = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: '8946e322a092d7ac6f43640295413c05',
  chains: [sepolia, myCustomChain], 
  ssr: true,
  transports: {
    [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/kYDbblb6lAPtodSpZX0SZoPT8XPzqDxF'),
    [myCustomChain.id]: http('https://dream-rpc.somnia.network'), // transport for custom chain
  },
});
