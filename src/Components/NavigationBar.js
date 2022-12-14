import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import BookOutlined from '@mui/icons-material/BookOutlined';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

//Панель навигации с кнопками: "Книжечка", "Календарь", "Все задания"
//Книжечка отправляет на страницу /
//Календарь на /Calendar (scheduler/src/routes/Calendar)
//Все задания на /AllTasks (scheduler/src/routes/AllTasks)

export default function NavigationBar() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClickOpen}
          >
            <BookOutlined />
          </IconButton>


          <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Добавление новой задачи</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Опишите задачу, укажите требуемые время и дату
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="date"
            label="Здесь должны быть поля для создания новой задачи"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button variant="contained" onClick={handleClose}>Добавить</Button>
        </DialogActions>
      </Dialog>


          <Typography variant="h6" component="div" sx={{ mr: 3}}>
            Ежедневник
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                key='Calendar'
                sx={{ my: 2, color: 'white', display: 'block' }}
                href="/Calendar"
              >
                Календарь
              </Button>
              <Button
                key='AllTasks'
                sx={{ my: 2, color: 'white', display: 'block' }}
                href="/AllTasks"
              >
                Все задачи
              </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}