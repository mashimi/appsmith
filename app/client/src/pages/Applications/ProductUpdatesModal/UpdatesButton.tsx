import React from "react";
import styled from "styled-components";
import { Colors } from "constants/Colors";
import { Icon } from "@appsmith/ads";

const StyledUpdatesButton = styled.div`
  position: absolute;
  left: 30px;
  bottom: 25px;
  width: 190px;
  height: 38px;
  display: flex;
  align-items: center;
  padding: 0 ${(props) => props.theme.spaces[5]}px;
  justify-content: space-between;
  cursor: pointer;
  background-color: ${(props) =>
    props.theme.colors.floatingBtn.backgroundColor};
  border: 1px solid ${(props) => props.theme.colors.floatingBtn.borderColor};
`;

const StyledTag = styled.div`
  font-weight: ${(props) => props.theme.typography.p2.fontWeight};
  font-size: ${(props) => props.theme.typography.p2.fontSize}px;
  line-height: ${(props) => props.theme.typography.p2.lineHeight}px;
  letter-spacing: ${(props) => props.theme.typography.p2.letterSpacing};
  padding: ${(props) => props.theme.spaces[1]}px;
  background: ${(props) => props.theme.colors.floatingBtn.tagBackground};
  border-radius: 100px;
  text-align: center;
  color: ${Colors.WHITE};
  width: 35px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UpdatesButtonTextContainer = styled.div`
  font-weight: ${(props) => props.theme.typography.floatingBtn.fontWeight};
  font-size: ${(props) => props.theme.typography.floatingBtn.fontSize}px;
  line-height: ${(props) => props.theme.typography.floatingBtn.lineHeight}px;
  letter-spacing: ${(props) =>
    props.theme.typography.floatingBtn.letterSpacing}px;
  display: flex;
  align-items: center;
  margin-left: ${(props) => props.theme.spaces[5]}px;
  color: ${(props) => props.theme.colors.text.normal};
`;

function UpdatesButton({
  newReleasesCount,
  onClick,
}: {
  newReleasesCount: string;
  onClick: () => void;
}) {
  return (
    <StyledUpdatesButton data-testid="t--product-updates-btn" onClick={onClick}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Icon name="gift-line" size="sm" />
        <UpdatesButtonTextContainer>
          What&apos;s New?
        </UpdatesButtonTextContainer>
      </div>
      {newReleasesCount && <StyledTag>{newReleasesCount}</StyledTag>}
    </StyledUpdatesButton>
  );
}

export default UpdatesButton;
