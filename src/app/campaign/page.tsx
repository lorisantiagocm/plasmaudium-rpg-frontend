'use client'

import categories from "../mocks/categories";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CategoriesTabs from "@/components/DropdownFullscreen/Body";

export default function Campaign({ name = 'Teste' }) {
  return (
    <>
      <Stack spacing={2} alignItems={'center'} direction={'column'}>
        <Typography variant="h1" gutterBottom>
          Campanha {name}
        </Typography>
        <Box sx={{ width: '100%' }}>
          <CategoriesTabs categories={categories} />
        </Box>
      </Stack>
    </>
  )
}