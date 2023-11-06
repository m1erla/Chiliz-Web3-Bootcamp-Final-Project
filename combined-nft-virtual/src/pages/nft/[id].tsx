import NFTDetails from "@/components/NFTDetails";
import Layout from "@/app/layout/Layout";
import { getMarketplaceContract, getNFTContract } from "@/util/getContracts";
import { useNFT, useValidDirectListings } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import CancelSellingCard from "@/components/CancelSelling";
import SellNFTCard from "@/components/SellNFTCard";
import { useRouter } from "next/router";

function NFTDetailsPage() {
  const router = useRouter();
  const [price, setPrice] = useState(0.01);
  const [symbol, setSymbol] = useState("");
  const [listingID, setListingID] = useState("");
  const [nftID, setNftID] = useState("");
  const [contractId, setContractId] = useState("");
  const [address, setAddress] = useState("");
  const { marketplace } = getMarketplaceContract();
  const { nft_contract } = getNFTContract();

  const { data: nft, isLoading: isNFTLoading } = useNFT(nft_contract, nftID);

  const { data: directListings } = useValidDirectListings(marketplace, {
    start: 0,
    count: 100,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { id } = router.query;
      setNftID(id as string);
    }
    let listedNFT = directListings?.find((item) => item.tokenId === nftID);
    if (listedNFT) {
      setListingID(listedNFT.id);
      setPrice(Number(listedNFT.currencyValuePerToken.displayValue));
      setSymbol(listedNFT.currencyValuePerToken.symbol);
    }
  }, [directListings, price, listingID, router.query]);

  const handleTransfer = async () => {
    try {
      alert(`Transfer islemi: ${contractId} adresine yapiliyor`);
    } catch (error) {
      alert("Transfer islemi basarisiz oldu");
    }
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  return (
    <Layout>
      <div>
        <h1 className="text-6xl font-semibold my-4 text-center">NFT Details</h1>

        {isNFTLoading || !nft ? (
          <div className="text-center">{`Loading NFT with id ${nftID} `}</div>
        ) : (
          <>
            <NFTDetails {...nft} />

            {listingID ? (
              <CancelSellingCard
                price={price}
                symbol={symbol}
                listingID={listingID}
              />
            ) : (
              <SellNFTCard price={price} onUpdatePrice={setPrice} id={nftID} />
            )}
            <input
              type="text"
              placeholder="Contarct ID"
              value={contractId}
              onChange={(e) => setContractId(e.target.value)}
            />
            <button onClick={handleTransfer}>Transfer</button>
          </>
        )}
      </div>
    </Layout>
  );
}
export default NFTDetailsPage;
