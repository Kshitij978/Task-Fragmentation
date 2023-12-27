import React from "react";
import { AppTooltip } from "./AppTooltip";
import { AppExtLink } from "./AppExtLink";
import { prettyEthAddress } from "your-utilities-path"; // Replace with actual import paths

export const TxLinks = ({ burnTxHash, walletChain }) => (
  <>
    {burnTxHash && (
      <div className="tx_links">
        <AppTooltip
          title={`Check burn Transaction on chain ${walletChain?.blockExplorers?.default?.name}`}
        >
          <AppExtLink
            url={`${walletChain?.blockExplorers?.default?.url}/tx/${burnTxHash}`}
            className="header_link"
          >
            Burn Tx: {prettyEthAddress(burnTxHash ?? zeroAddress)}
          </AppExtLink>
        </AppTooltip>
      </div>
    )}
  </>
);
