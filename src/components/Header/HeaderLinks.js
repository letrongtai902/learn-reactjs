import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import styles from '../../assets/jss/material-kit-react/components/headerLinksStyle';
import { Face, Contacts, Home, Book, ReorderOutlined } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import Button from '../CustomButtons/Button';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <div>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <NavLink to="/" className={classes.navLink} target="_self" onClick={console.log('click')}>
            <Home className={classes.icons} /> TRANG CHỦ
          </NavLink>
        </ListItem>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="SẢN PHẨM"
            hoverColor="success"
            buttonProps={{
              className: classes.navLink,
              color: 'transparent',
            }}
            buttonIcon={ReorderOutlined}
            dropdownList={[
              <Button className={classes.dropdownLink} color="transparent">
                TRÁI CÂY MIỆT VƯỜN
              </Button>,
              <Button className={classes.dropdownLink} color="transparent">
                RAU TỰ NHIÊN
              </Button>,
              <Button className={classes.dropdownLink} color="transparent">
                THỰC PHẨM ĐÓNG GÓI
              </Button>,
            ]}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <NavLink to="/blogs" className={classes.navLink} target="_self">
            <Book className={classes.icons} /> HÀNH TRÌNH Ừ MAI
          </NavLink>
        </ListItem>
        <ListItem className={classes.listItem}>
          <NavLink to="/abouts" className={classes.navLink} target="_self">
            <Face className={classes.icons} /> VỀ CHÚNG TÔI
          </NavLink>
        </ListItem>
        <ListItem className={classes.listItem}>
          <NavLink to="/contacts" className={classes.navLink} target="_self">
            <Contacts className={classes.icons} /> LIÊN HỆ
          </NavLink>
        </ListItem>
      </List>
    </div>
  );
}
