import { Box } from '@mui/material';
import { NextPage } from 'next';
import Head from 'next/head';
import { Navbar, Sidebar } from '../ui';

interface Props {
  title?: string;
  children: JSX.Element;
}

export const Layout: NextPage<Props> = ({ title = 'OpenJira', children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />
      <Sidebar />
      <Box sx={{ padding: '10px 20px' }}>{children}</Box>
    </Box>
  );
};
