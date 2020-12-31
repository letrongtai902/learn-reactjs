import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '../CustomButtons/Button';
import styles from '../../assets/jss/material-kit-react/components/headerLinksStyle';
import { Face, Contacts, Home, Book } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button color="transparent" target="_blank">
          <NavLink to="/" className={classes.navLink}>
            <Home className={classes.icons} /> Trang Chủ
          </NavLink>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" target="_blank">
          <NavLink to="/blogs" className={classes.navLink}>
            <Book className={classes.icons} /> Bài viết
          </NavLink>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" target="_blank">
          <NavLink to="/abouts" className={classes.navLink}>
            <Face className={classes.icons} /> Về Chúng Tôi
          </NavLink>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" target="_blank">
          <NavLink to="/contacts" className={classes.navLink}>
            <Contacts className={classes.icons} /> Liên Hệ
          </NavLink>
        </Button>
      </ListItem>
    </List>
  );
}
