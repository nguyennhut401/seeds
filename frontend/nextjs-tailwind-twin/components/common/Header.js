import React from "react";
import tw, { styled } from "twin.macro";

const HeaderDiv = styled.div(() => [
  tw`
    bg-primary-700
    text-white
    px-4
    flex
    align-middle
    items-center
    justify-items-center
    content-between
  `,
  `min-height: 80px`,
]);

const Menu = styled.div(() => {});

const MasterHeader = ({ children, ...props }) => {
  return (
    <HeaderDiv>
      <h1 className="text-lg font-bold">Website!</h1>
      {children}
    </HeaderDiv>
  );
};

export default MasterHeader;
