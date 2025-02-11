'use client'

import categories from "../mocks/categories";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CategoriesTabs from "@/components/DropdownFullscreen/Body";
import { Button } from "@mui/material";
import { useCategoryStore } from "../stores/categoryStore";

export default function Campaign({ name = 'Teste' }) {
  const { setOpenModal } = useCategoryStore()

  return (
    <>
      <Stack spacing={2} alignItems={'center'} direction={'column'}>
        <Typography variant="h1" gutterBottom>
          Campanha {name}
        </Typography>
        <Box sx={{ width: '100%', p: 3 }}>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography variant="h2" gutterBottom>
              Categorias
            </Typography>
            <Button onClick={() => setOpenModal(true)}>Adicionar</Button>
          </Stack>
          <CategoriesTabs categories={categories} />
        </Box>
      </Stack>
    </>
  )
}