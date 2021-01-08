import React from 'react';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Parallax from '../../../components/Parallax/Parallax';
import classNames from 'classnames';

import { makeStyles } from '@material-ui/core/styles';
import styles from '../../../assets/jss/material-kit-react/views/landingPage';

const useStyles = makeStyles(styles);

function Blog(props) {
  const classes = useStyles();
  return (
    <div>
      <Parallax
        image={
          'https://firebasestorage.googleapis.com/v0/b/dataumaifruits.appspot.com/o/image%2Fsilider-blog.jpg?alt=media&token=2f756fde-1da6-4a3e-8570-42abd09e8c89'
        }
      >
        <div className={classes.container} style={{ textAlign: 'center' }}>
          <GridContainer>
            <GridItem xs={12}></GridItem>
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
