import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';



export default function IconBreadcrumbs(props) {
  const {maDanhMucKhoahoc, tenDanhMucKhoaHoc} = props.danhMucKhoaHoc
  return (
    <div role="presentation" className="text-white">
      <Breadcrumbs aria-label="breadcrumb" color="white">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="white"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit"  />
          Home
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="white"
          href="/getting-started/installation/"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {maDanhMucKhoahoc}
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="white"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {tenDanhMucKhoaHoc}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}