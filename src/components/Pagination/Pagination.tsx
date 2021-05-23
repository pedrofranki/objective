import React, { useEffect, useState } from "react";
import * as S from "./styles";

interface Props {
  pagesCount: any;
  total: number;
  currentPage: number;
  handlePageChange: (index: number) => void;
  pageSize: number;
}

const Pagination = ({
  pagesCount,
  currentPage = 1,
  handlePageChange,
  pageSize,
  total,
}: Props) => {
  const [pagesBlocks, setPagesBlocks] = useState<number[]>();

  useEffect(() => {
    setPagesBlocks(getArrayFromTotal());
  }, [pageSize, total]);

  const getArrayFromTotal = () => {
    let totalPages = total > pageSize ? Math.ceil(total / pageSize) : 1;

    let array: number[] = [];

    if (totalPages >= 1) {
      for (let i = 1; i <= totalPages; i++) {
        array.push(i);
      }
    }

    return array;
  };
  console.log(pagesBlocks, "pagesBlocks");
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
        {/* {pagesBlocks &&
          pagesBlocks.map((item: any) => (
            <S.PageNumber
              active={item === currentPage}
              key={item}
              onClick={() => handlePageChange(item)}
            >
              {item}
            </S.PageNumber>
          ))} */}
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
