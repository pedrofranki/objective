import React from "react";
import * as S from "./styles";

interface Props {
  pagesCount: any;
}

const Pagination = ({ pagesCount }: Props) => {
  return (
    <S.Container>
      <span
        className="iconify"
        data-icon="fluent:chevron-double-left-16-filled"
        data-inline="false"
      ></span>

      <span
        className="iconify"
        data-icon="eva:arrow-ios-back-outline"
        data-inline="false"
      ></span>

      {pagesCount.map((_: any, index: number) => (
        <S.PageNumber>{index + 1}</S.PageNumber>
      ))}
      <span
        className="iconify"
        data-icon="eva:arrow-ios-forward-outline"
        data-inline="false"
      ></span>
      <span
        className="iconify"
        data-icon="fluent:chevron-double-right-16-filled"
        data-inline="false"
      ></span>
    </S.Container>
  );
};

export default Pagination;
