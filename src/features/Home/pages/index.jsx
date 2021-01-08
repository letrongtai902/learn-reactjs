import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../../assets/jss/material-kit-react/views/landingPage';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Parallax from '../../../components/Parallax/Parallax';
import ProductSection from '../components/ProductSection';
import WorkSection from '../components/WorkSection';
import TeamSection from '../components/TeamSection';
import classNames from 'classnames';
const useStyles = makeStyles(styles);
function Home(props) {
  const classes = useStyles();
  return (
    <div>
      <Parallax
        image={
          'https://firebasestorage.googleapis.com/v0/b/dataumaifruits.appspot.com/o/image%2Fsilider-home.jpg?alt=media&token=07c725ad-2741-467d-85fc-46bbf4b349d0'
        }
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}></GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />

          <TeamSection />

          <WorkSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
