// Library imports
import React from "react";
import styled from "styled-components";

// Hooks
import useBurn from "./hooks/useBurn";

// Components
import { DashboardLayoutStyled } from "./DashboardLayoutStyled";
import { BurnButtonBar } from "./components/BurnButtonBar";
import { BurnStatsContainer } from "./components/BurnStatsContainer";
import { AppToast } from "./components/AppToast";
import { TransactionTableStyled } from "./components/TransactionTableStyled";
import { BurnTxTable } from "./components/BurnTxTable";
import { ChainSelector } from "./components/ChainSelector";
import { SupplyLabelList } from "./components/SupplyLabelList";
import { TopBar } from "./components/TopBar";
import { SupplyBar } from "./components/SupplyBar";
import { TxLinks } from "./components/TxLinks";
import { BurnBar } from "./components/BurnBar";
import { InfoBox } from "./components/InfoBox";

const StyledBurnPageContainer = styled.div``;

const BurnPage = () => {
  const {
    openChainModal,
    walletChain,
    openChainSelector,
    setOpenChainSelector,
    receiveChains,
    setSuppliesChain,
    suppliesChain,
    burnTransactions,
    burnAmount,
    toastMsg,
    toastSev,
    txButton,
    txProgress,
    burnTxHash,
    statsSupplies,
    tokenAddress,
    coinData,
    onChangeBurnAmount,
    executeBurn,
  } = useBurn();

  return (
    <StyledBurnPageContainer>
      <DashboardLayoutStyled className="burnpage">
        <div
          className="top_conatiner burnpage"
          style={{ alignItems: "flex-start" }}
        >
          <InfoBox
            title="App TOKEN BURN"
            description={`" The process of reducing the supply of App tokens by permanently removing a certain number of them from circulation, often through a deliberate and recorded mechanism."`}
          />
          <BurnButtonBar
            boxSubheader="Burn your App"
            boxDescription={`
              "The process of reducing the supply of App tokens by permanently removing a certain number of them from circulation, often through a deliberate and recorded mechanism."
            `}
          >
            <BurnBar
              inputMuted="Enter amount to Burn"
              inputValue={burnAmount}
              onChangeBurnAmount={onChangeBurnAmount}
              executeBurn={executeBurn}
              txButton={txButton}
              txProgress={txProgress}
            />
            <TxLinks burnTxHash={burnTxHash} walletChain={walletChain} />
          </BurnButtonBar>
        </div>

        {/* Burn Stats Container */}
        <BurnStatsContainer>
          <TopBar
            appIconUrl="/images/token/App_new.svg"
            label="App SUPPLY"
            onClick={openChainModal}
            title={walletChain?.name || "---"}
            endIcon="/icons/expand_more.svg"
            startIcon={`/images/token/${walletChain?.nativeCurrency?.symbol}.svg`}
            viewContractUrl={`${suppliesChain?.blockExplorers?.default?.url}/address/${tokenAddress}`}
          />
          <SupplyBar circulatingPercent={statsSupplies.circulatingPercent} />
          <SupplyLabelList
            walletChain={walletChain}
            statsSupplies={statsSupplies}
            allSupplies={allSupplies}
            chainTokenSymbols={chainTokenSymbols}
          />
        </BurnStatsContainer>
      </DashboardLayoutStyled>

      {/* Transaction Table */}
      <TransactionTableStyled>
        <div className="header">
          <p className="header_label">Burn Transactions</p>
        </div>
        <BurnTxTable
          data={burnTransactions}
          priceUSD={coinData?.current_price?.usd}
        />
      </TransactionTableStyled>

      {/* Chain Selector */}
      <ChainSelector
        title="Switch Token Chain"
        openChainSelector={openChainSelector}
        setOpenChainSelector={setOpenChainSelector}
        chains={receiveChains}
        selectedChain={suppliesChain}
        setSelectedChain={setSuppliesChain}
      />

      {/* App Toast */}
      <AppToast
        position={{ vertical: "bottom", horizontal: "center" }}
        message={toastMsg}
        severity={toastSev}
      />
    </StyledBurnPageContainer>
  );
};

export default BurnPage;
