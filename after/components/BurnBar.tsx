import React from "react";
import { AppIcon } from "./AppIcon";

export const BurnBar = ({
  inputMuted,
  inputValue,
  onChangeBurnAmount,
  executeBurn,
  txButton,
  txProgress,
}) => (
  <div className="burn_bar">
    <div className="input_value_box">
      <p className="input_muted">{inputMuted}</p>
      <input
        className="input_value"
        type="text"
        value={inputValue}
        placeholder="0.00"
        onChange={onChangeBurnAmount}
      />
    </div>
    <Button
      variant="outlined"
      onClick={executeBurn}
      startIcon={
        txProgress ? (
          <CircularProgress size={20} color="inherit" />
        ) : (
          <AppIcon
            url="/icons/fire.svg"
            fill={IconFilter.primary}
            size={1.5}
            margin={0}
          />
        )
      }
    >
      <span>{txButton}</span>
    </Button>
  </div>
);
