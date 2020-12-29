import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Favorite from '@material-ui/icons/Favorite';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import styles from '../../assets/jss/material-kit-react/components/footerStyle';

const useStyles = makeStyles(styles);

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};

function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.facebook.com/umaifruits" className={classes.block}>
                <FacebookIcon />
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.facebook.com/umaifruits" className={classes.block}>
                <InstagramIcon />
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.facebook.com/umaifruits" className={classes.block}>
                <TwitterIcon />
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made by <Favorite className={classes.icon} /> UmaiFood Team.
        </div>
      </div>
    </footer>
  );
}
export default Footer;
