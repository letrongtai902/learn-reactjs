import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import styles from '../../assets/jss/material-kit-react/components/headerLinksStyle';
import { Face, Contacts, Home, Book, AccountBoxOutlined } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Register from '../../features/Auth/components/Register';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <div>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <NavLink to="/" className={classes.navLink} target="_self">
            <Home className={classes.icons} /> Trang Chủ
          </NavLink>
        </ListItem>
        <ListItem className={classes.listItem}>
          <NavLink to="/blogs" className={classes.navLink} target="_self">
            <Book className={classes.icons} /> Bài viết
          </NavLink>
        </ListItem>
        <ListItem className={classes.listItem}>
          <NavLink to="/abouts" className={classes.navLink} target="_self">
            <Face className={classes.icons} /> Về Chúng Tôi
          </NavLink>
        </ListItem>
        <ListItem className={classes.listItem}>
          <NavLink to="/contacts" className={classes.navLink} target="_self">
            <Contacts className={classes.icons} /> Liên Hệ
          </NavLink>
        </ListItem>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="Đăng Nhập/Đăng Ký"
            buttonProps={{
              className: classes.navLink,
              color: 'transparent',
            }}
            buttonIcon={AccountBoxOutlined}
            dropdownList={[
              <Button className={classes.dropdownLink}>Đăng Nhập</Button>,
              <Button onClick={handleClickOpen} className={classes.dropdownLink}>
                Đăng Ký
              </Button>,
            ]}
          />
        </ListItem>
      </List>
      <Dialog disableBackdropClick open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <Register />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
