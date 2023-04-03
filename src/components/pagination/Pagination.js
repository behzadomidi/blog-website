import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./Pagination.css";
import { useSelector } from "react-redux";

export default function PaginationRounded() {
  const { theme } = useSelector((state) => state.themeReducer);
  return (
    <div className={`${theme == "light" ? "pag-main" : "pag-main darkpag"}`}>
      <div className="pagination">
        <Stack spacing={2}>
          <Pagination count={10} shape="rounded" />
        </Stack>
      </div>
    </div>
  );
}
