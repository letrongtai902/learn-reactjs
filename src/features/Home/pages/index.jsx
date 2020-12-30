import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../../assets/jss/material-kit-react/views/landingPage';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Parallax from '../../../components/Parallax/Parallax';
import slider from '../../../assets/img/silider-home.jpg';
import Button from '../../../components/CustomButtons/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { NavLink } from 'react-router-dom';
import ProductSection from '../components/ProductSection';
import WorkSection from '../components/WorkSection';
import classNames from 'classnames';
const useStyles = makeStyles(styles);
function Home(props) {
  const classes = useStyles();
  return (
    <div>
      <Parallax filter image={slider}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
              <h1 className={classes.title}>ĐÔI NÉT VỀ Ừ MAI FOOD</h1>
              <h4>
                Ừ Mai Food là một dự án được ấp ủ bởi những con người trẻ tuổi. Những người đã hành trang cơm áo đến các
                nước nông nghiệp phát triển bậc nhất Thế Giới như Nhật Bản, Israel với ước mơ đem kiến thức trở về và
                gieo thành quả ngọt trên đất mẹ.
              </h4>
              <br />
              <NavLink to="/abouts">
                <Button color="success" size="lg" target="_blank" rel="noopener noreferrer">
                  XEM THÊM
                  <ArrowForwardIosIcon />
                </Button>
              </NavLink>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <WorkSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
