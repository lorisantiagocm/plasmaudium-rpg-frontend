import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



export default function VideoCard({ name, id }) {
  return (
    <Card sx={{ minWidth: 400, textAlign: 'center' }}>
      <iframe
        width='400px'
        height='200px'
        src={`https://www.youtube.com/embed/${id}`}>
      </iframe>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
          <IconButton aria-label="delete" color='error'>
            <DeleteIcon />
          </IconButton>
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small" variant="contained" color="error">Deletar</Button>
      </CardActions> */}
    </Card>
    // <div className="bg-emerald-50/40 flex flex-col items-center gap-2 p-4 rounded-lg border-green-50 border-2">
    //   {name}
    //   <iframe
    //     src={`https://www.youtube.com/embed/${id}`}>
    //   </iframe>
    // </div>
  )
}
