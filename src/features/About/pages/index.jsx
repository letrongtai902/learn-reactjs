import React from 'react';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Parallax from '../../../components/Parallax/Parallax';
import classNames from 'classnames';
import ProductSection from '../components/ProductSection';

import { makeStyles } from '@material-ui/core/styles';
import styles from '../../../assets/jss/material-kit-react/views/landingPage';

const useStyles = makeStyles(styles);

function About(props) {
  const classes = useStyles();
  return (
    <div>
      <Parallax
        image={
          'https://firebasestorage.googleapis.com/v0/b/dataumaifruits.appspot.com/o/image%2Fsilider-about.jpg?alt=media&token=0e2f76da-4212-4714-a1b9-2cefe98b0661'
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
          <ProductSection />
        </div>
      </div>
    </div>
  );
}

export default About;
