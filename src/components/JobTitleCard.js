import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from '@mui/material/Link';
import Fab from '@mui/material/Fab';
import ShareIcon from '@mui/icons-material/Share';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Donut } from './Doughnut';


export default function JobTitleCard({ JobDetails }) {
  return (
    <Card sx={{ minWidth: '10%', pb: 0 }}>
      <CardContent>
        <Stack direction="row" spacing={1}>
          <div style={{ width: '80%' }}>
            <Typography variant="h5" component="div" sx={{ pb: 1, fontWeight: 'bold' }}>
              Software Engineer Intern
            </Typography>
            <Stack direction="row" spacing={2}>
              <Chip variant="Chip Filled" label="Remote" />
              <Chip variant="Chip Filled" label="Full-time" />
            </Stack>
          </div>
          <Stack direction="row" spacing={1} sx={{}}>
            <Fab color="black" aria-label="add" size="small">
              <ShareIcon />
            </Fab>
          </Stack>
        </Stack>

        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Donut statistics={[10, 2, 3, 4]} />
          </Grid>
          <Grid item xs={6} sx={{ mt: 5 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ pb: 1, ml: 2, display: 'flex', alignItems: 'center', fontSize: 1 }}
            >
              <CheckCircleIcon sx={{ mr: 1 }} />
              Offered: 7
            </Typography>
            <Typography variant="h6" component="div" sx={{ pb: 1, ml: 2, display: 'flex', alignItems: 'center' }}>
              <SupervisorAccountIcon sx={{ mr: 1 }} />
              Total Applicants: 72
            </Typography>
            <Typography variant="h6" component="div" sx={{ pb: 1, ml: 2, display: 'flex', alignItems: 'center' }}>
              <SupervisorAccountIcon sx={{ mr: 1 }} />
              New Applicants: 35
            </Typography>
            <Button variant="contained" sx={{ float: 'right', mt: 2 }}>
              <Link href="/dashboard/user" underline="none" color="inherit">Details</Link>
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
