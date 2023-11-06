import "@/app/styles/globals.css";
import type { AppProps } from "next/app";
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import { SpicyChain } from "@thirdweb-dev/chains";
import { WagmiConfig, createConfig, mainnet } from "wagmi";
import { createPublicClient, http } from "viem";
import { AppContextProvider } from "@/contexts/AppContext";

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <AppContextProvider>
        <ThirdwebProvider
          activeChain={SpicyChain}
          clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
          supportedWallets={[metamaskWallet()]}
        >
          <Component {...pageProps} />
        </ThirdwebProvider>
      </AppContextProvider>
    </WagmiConfig>
  );
}
