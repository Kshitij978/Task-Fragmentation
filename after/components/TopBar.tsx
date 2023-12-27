import React from "react";
import { AppIcon } from "./AppIcon";
import { AppChip } from "./AppChip";
import { AppExtLink } from "./AppExtLink";

export const TopBar = ({
  appIconUrl,
  label,
  onClick,
  title,
  endIcon,
  startIcon,
  viewContractUrl,
}) => (
  <div className="top_bar">
    <AppIcon url={appIconUrl} size={2} margin={0} fill={IconFilter.unset} />
    <p className="label">{label}</p>
    <AppChip
      onClick={onClick}
      title={title}
      endIcon={endIcon}
      startIcon={startIcon}
    ></AppChip>
    <AppExtLink className="supply_label" url={viewContractUrl}>
      View Contract
    </AppExtLink>
  </div>
);
