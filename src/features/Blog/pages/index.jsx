import React from 'react';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Parallax from '../../../components/Parallax/Parallax';
import slider from '../../../assets/img/silider-blog.jpg';
import classNames from 'classnames';

import { makeStyles } from '@material-ui/core/styles';
import styles from '../../../assets/jss/material-kit-react/views/landingPage';

const useStyles = makeStyles(styles);

function Blog(props) {
  const classes = useStyles();
  return (
    <div>
      <Parallax filter image={slider}>
        <div className={classes.container} style={{ textAlign: 'center' }}>
          <GridContainer>
            <GridItem xs={12}>
              <h1 className={classes.title}>BÀI VIẾT TỪ Ừ MAI FOOD</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <h1>Blog Page</h1>
        </div>
      </div>
    </div>
  );
}

export default Blog;
