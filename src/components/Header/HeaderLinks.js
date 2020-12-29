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
        <NavLink to="/" className={classes.navLink}>
          <Button color="transparent" target="_blank">
            <Home className={classes.icons} /> Trang Chủ
          </Button>
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink to="/" className={classes.navLink}>
          <Button color="transparent" target="_blank">
            <Book className={classes.icons} /> Bài viết
          </Button>
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink to="/" className={classes.navLink}>
          <Button color="transparent" target="_blank">
            <Face className={classes.icons} /> Về Chúng Tôi
          </Button>
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink to="/" className={classes.navLink}>
          <Button color="transparent" target="_blank">
            <Contacts className={classes.icons} /> Liên Hệ
          </Button>
        </NavLink>
      </ListItem>
    </List>
  );
}
