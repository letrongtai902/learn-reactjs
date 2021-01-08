import React from 'react';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Parallax from '../../../components/Parallax/Parallax';
import classNames from 'classnames';

import { makeStyles } from '@material-ui/core/styles';
import styles from '../../../assets/jss/material-kit-react/views/landingPage';

const useStyles = makeStyles(styles);

function Contact(props) {
  const classes = useStyles();
  return (
    <div>
      <Parallax
        image={
          'https://firebasestorage.googleapis.com/v0/b/dataumaifruits.appspot.com/o/image%2Fsilide-contact-1.jpg?alt=media&token=06ae93bb-1dd7-45ea-8a1f-2d9f294f4d68'
        }
      >
        <div className={classes.container} style={{ textAlign: 'center' }}>
          <GridContainer>
            <GridItem></GridItem>
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
