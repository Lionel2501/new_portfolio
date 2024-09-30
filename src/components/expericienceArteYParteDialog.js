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

const ExpericienceArteYParteDialog = ({open, onOpen, t}) => {

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
      <DialogTitle sx={{ m: 2, p:0 }} id="customized-dialog-title">
        {t('experience_arteyparte.title_job')} <br></br><small>{t('experience_arteyparte.title_job_date')}</small>
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
          <strong>{t('global.job_posicion_title')}</strong>{t('experience_arteyparte.job_posicion')}<i>{t('experience_arteyparte._job_posicion')}</i>.
        </Typography>
        <Divider />
        <Typography marginTop={1}><strong>{t('global.goals')}</strong> <br></br></Typography>
        <List>
          <ListItem sx={{ paddingY: 0 }}>
            <ListItemText margin={0} primary={t('experience_arteyparte.goals_1')} />
          </ListItem>
          <ListItem sx={{ paddingY: 0 }}>
            <ListItemText margin={0} primary={t('experience_arteyparte.goals_2')} />
          </ListItem>
        </List>
        <Divider />
        <Typography marginBottom={2} marginTop={1}><strong>{t('global.tecnologies')}</strong> <br></br></Typography>
        <Stack direction="row" spacing={2} marginBottom={2} marginTop={1} sx={{ flexWrap: 'wrap', rowGap: '10px'}}>
          <Chip size='small' label="HTML" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip size='small' label="CSS" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          <Chip size='small' label="Bootstrap" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
        </Stack>
        <Divider />
        <Typography marginTop={1}><strong>{t('global.task_done')}</strong> <br></br></Typography>
        <List>
          <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
            <ListItemText primary={t('experience_arteyparte.task_done_1')} />
          </ListItem>
          <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
            <ListItemText primary={t('experience_arteyparte.task_done_2')}/>
          </ListItem>
          <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
            <ListItemText primary={t('experience_arteyparte.task_done_3')} />
          </ListItem>
          <ListItem sx={{ paddingY: 0, textAlign: "justify" }}>
            <ListItemText primary={t('experience_arteyparte.task_done_4')} />
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>{t('global.button_close')}</Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default ExpericienceArteYParteDialog;