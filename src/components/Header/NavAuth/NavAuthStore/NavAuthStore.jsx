import React, { useState, useEffect } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { actFetchUserInfo } from "containers/Auth/Profile/module/actions";
import LoaderIcon from "components/LoaderIcon";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CustomizedBadges() {
  const { userInfo, loading } = useSelector(
    (state) => state.userInfoReducer
  );
  const cartCount = useSelector((state) => state.cartReducer.cartCount);
  const currentUser = useSelector((state) => state.authReducer.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser !== null ) {
      dispatch(actFetchUserInfo(currentUser.accessToken));
    }
  }, [currentUser]);
  if (currentUser) {
    if(loading) return <LoaderIcon/>
    return (
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={userInfo.chiTietKhoaHocGhiDanh.length} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    );
  }
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={0} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
