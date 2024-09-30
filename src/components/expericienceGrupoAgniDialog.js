import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { List, ListItem, ListItemText, Divider } from '@mui/material';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const ExpericienceGrupoAgniDialog = ({open, onOpen, t}) => {

  const [_open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    if (typeof onOpen === 'function') {
      onOpen(false);
    }
  };

  useEffect(() => {
    setOpen(open)
  }, [open]);

  return (
    <BootstrapDialog
      minWidth={'800px'}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={_open}
    >
      <DialogTitle sx={{ m: 2, p: 0 }} id="customized-dialog-title">
        {t('experience_grupoagni.title_job')} <br></br><small>{t('experience_grupoagni.title_job_date')}</small>
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Typography marginBottom={1} style={{ textAlign: "justify" }}>
          <strong>{t('global.job_posicion_title')}</strong> {t('experience_grupoagni.job_posicion')}
        </Typography>
        <Divider />
        <Typography marginTop={1}><strong>{t('global.goals')}</strong> <br></br></Typography>
        <List>
          <ListItem sx={{ paddingY: 0 }}>
            <ListItemText margin={0} primary={t('experience_grupoagni.goals_1')} />
          </ListItem>
          <ListItem sx={{ paddingY: 0 }}>
            <ListItemText margin={0} primary={t('experience_grupoagni.goals_2')} />
          </ListItem>
        </List>
        <Divider />
        <Typography marginBottom={2} marginTop={1}><strong>{t('global.tecnologies')}</strong> <br></br></Typography>
        <Stack direction="row" spacing={2} marginBottom={2} marginTop={1} sx={{ flexWrap: 'wrap', rowGap: '10px'}}>
          <Chip label="HTML" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip label="CSS" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip label="Material UI" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip label="Javascript" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip label="React" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip label="Next JS" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip label="PHP" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip label="Laravel" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip label="Docker" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip label="Mongo DB" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip label="AWS" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip label="GitHub" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
        </Stack>
        <Divider />
        <Typography marginTop={1}><strong>{t('global.task_done')}</strong> <br></br></Typography>
        <List>
          <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
              <ListItemText primary={t('experience_grupoagni.task_done_1')} />
            </ListItem>
            <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
              <ListItemText primary={t('experience_grupoagni.task_done_2')}/>
            </ListItem>
            <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
              <ListItemText primary={t('experience_grupoagni.task_done_3')} />
            </ListItem>
            <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
              <ListItemText primary={t('experience_grupoagni.task_done_4')} />
            </ListItem>
            <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
              <ListItemText primary={t('experience_grupoagni.task_done_5')} />
            </ListItem>
            <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
              <ListItemText primary={t('experience_grupoagni.task_done_6')}/>
            </ListItem>
            <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
              <ListItemText primary={t('experience_grupoagni.task_done_7')} />
            </ListItem>
            <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
              <ListItemText primary={t('experience_grupoagni.task_done_8')} />
            </ListItem>
            <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
              <ListItemText primary={t('experience_grupoagni.task_done_9')} />
            </ListItem>
            <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
              <ListItemText primary={t('experience_grupoagni.task_done_10')}/>
            </ListItem>
            <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
              <ListItemText primary={t('experience_grupoagni.task_done_11')} />
            </ListItem>
            <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
              <ListItemText primary={t('experience_grupoagni.task_done_12')} />
            </ListItem>
            <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
              <ListItemText primary={t('experience_grupoagni.task_done_13')} />
            </ListItem>
            <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
              <ListItemText primary={t('experience_grupoagni.task_done_14')}/>
            </ListItem>
            <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
              <ListItemText primary={t('experience_grupoagni.task_done_15')} />
            </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>{t('global.button_close')}</Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default ExpericienceGrupoAgniDialog;