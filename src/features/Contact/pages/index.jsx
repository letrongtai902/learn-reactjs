import React from 'react';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Parallax from '../../../components/Parallax/Parallax';
import slider from '../../../assets/img/silide-contact-1.jpg';
import classNames from 'classnames';

import { makeStyles } from '@material-ui/core/styles';
import styles from '../../../assets/jss/material-kit-react/views/landingPage';

const useStyles = makeStyles(styles);

function Contact(props) {
  const classes = useStyles();
  return (
    <div>
      <Parallax filter image={slider}>
        <div className={classes.container} style={{ textAlign: 'center' }}>
          <GridContainer>
            <GridItem>
              <h1 className={classes.title}>LIÊN HỆ VỚI CHÚNG TÔI</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <h1>Contact Page</h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
