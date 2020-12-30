import React from 'react';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Parallax from '../../../components/Parallax/Parallax';
import slider from '../../../assets/img/silider-about.jpg';
import classNames from 'classnames';
import ProductSection from '../components/ProductSection';

import { makeStyles } from '@material-ui/core/styles';
import styles from '../../../assets/jss/material-kit-react/views/landingPage';

const useStyles = makeStyles(styles);

function About(props) {
  const classes = useStyles();
  return (
    <div>
      <Parallax filter image={slider}>
        <div className={classes.container} style={{ textAlign: 'center' }}>
          <GridContainer>
            <GridItem>
              <h1 className={classes.title}>VỀ CHÚNG Ừ MAI FOOD</h1>
            </GridItem>
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
