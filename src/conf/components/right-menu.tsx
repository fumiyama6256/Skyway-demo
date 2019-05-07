import * as React from "react";
import { useState } from "react";
import { FunctionComponent, ReactNode } from "react";
import { css } from "@emotion/core";
import { zIndex, rightMenuWidth } from "../utils/style";
import { Icon } from "./icon";

interface Props {
  children: ReactNode;
}
const RightMenu: FunctionComponent<Props> = ({ children }) => {
  const [isVisible, setVisible] = useState(true);

  return (
    <div css={wrapperStyle} className={isVisible ? visibleClass : ""}>
      <div css={scrollerStyle}>{children}</div>
      <div css={togglerStyle} onClick={() => setVisible(!isVisible)}>
        {isVisible ? (
          <Icon name="chevron_right" />
        ) : (
          <Icon name="chevron_left" />
        )}
      </div>
    </div>
  );
};

export default RightMenu;

const visibleClass = "-visible";
const wrapperWidth = rightMenuWidth;
const wrapperStyle = css({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: zIndex.base,
  width: wrapperWidth,
  backgroundColor: "#eee",
  height: "100%",
  transition: ".25s ease transform",
  transform: `translateX(${wrapperWidth}px)`,
  willChange: "transform",

  [`&.${visibleClass}`]: {
    transform: "translateX(0)"
  }
});

const scrollerStyle = css({
  height: "100%",
  overflowY: "scroll"
});

const togglerSize = 32;
const togglerStyle = css({
  position: "absolute",
  top: 0,
  left: -togglerSize,
  width: togglerSize,
  height: togglerSize,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "inherit",
  cursor: "pointer"
});