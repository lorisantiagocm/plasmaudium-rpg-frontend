import { Box, Grid2 as Grid, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';
import { useCategoryStore } from '@/app/stores/categoryStore';
import { useForm } from "react-hook-form";
import { CategoryFormData } from '@/app/stores/categoryStore';

export default function CategoryForm() {
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<CategoryFormData>();
  const onSubmit = (data: CategoryFormData) => console.log(data);
  const { initialModalData } = useCategoryStore();

  useEffect(() => {
    reset(initialModalData)
  }, [initialModalData, reset])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2} direction={'column'}>
        <TextField label="Nome" variant="outlined" fullWidth {...register("name")} />
        <Grid container spacing={2} direction={'row'} alignItems={'center'}>
          <Grid size={10}>
            <TextField label="Cor (hex)" variant="outlined" fullWidth {...register("color")} />

          </Grid>
          <Grid size={2}>
            <Box component="section" sx={{ p: 2, minWidth: '10px', minHeight: '10px', backgroundColor: watch('color') }}>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </form>
  )
}