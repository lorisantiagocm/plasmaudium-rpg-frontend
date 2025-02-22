import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Category } from "@/app/types/campaign";
import { useCategoryStore } from '@/app/stores/categoryStore';
import VideoCard from '../common/VideoCard';
import { Button, Stack } from '@mui/material';
import FormDialog from '../common/FormDialog';
import CategoryForm from '../category/Form';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Stack mt={2} direction={'row'} sx={{ flexWrap: 'wrap' }} alignItems={'center'} justifyContent={'center'} useFlexGap spacing={2}>{children}</Stack>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CategoriesTabs({ categories }: { categories: Category[] }) {
  const [value, setValue] = React.useState(0);
  const { openModal, setInitialFormData, setOpenModal } = useCategoryStore();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {categories.map((category, index) => {
            return <Tab key={index} label={category.name} {...a11yProps(index)} />
          })}
        </Tabs>
      </Box>
      {categories.map((category, index) => {
        return (
          <Stack key={index} direction={'column'} alignItems={'center'}>
            {(value == index && (
              <Button onClick={() => { setInitialFormData({ name: category.name, color: category.color }); setOpenModal(true) }}>Editar</Button>
            ))}
            <CustomTabPanel key={index} value={value} index={index}>
              {category.videos?.map((video, index) => {
                return <VideoCard key={index} id={video.id} name={video.name} />
              })}
            </CustomTabPanel>
          </Stack>
        )
      })}
      <FormDialog open={openModal} setOpen={setOpenModal}>
        <CategoryForm />
      </FormDialog>
    </Box>
  );
}
