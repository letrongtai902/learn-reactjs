import React from 'react';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Parallax from '../../../components/Parallax/Parallax';
import Button from '../../../components/CustomButtons/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { NavLink } from 'react-router-dom';
import slider from '../../../assets/img/landing-bg.jpg';
import classNames from 'classnames';

import { makeStyles } from '@material-ui/core/styles';
import styles from '../../../assets/jss/material-kit-react/views/landingPage';

const useStyles = makeStyles(styles);

function Blog(props) {
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
              <h4>
                Năm 2020, Ừ Mai Fruits được khai sinh với mong muốn đem vị ngon, vị ngọt từ trái cây đặc sản quê hương
                vươn tầm Thế Giới.
              </h4>
              <h4>
                Umai - tiếng Nhật nghĩa là Ngon. Trong tiếng Việt, tên Ừ Mai mang đậm nét thân thuộc, dân dã như gọi tên
                một cô gái thôn quê dịu dàng, ngọt ngào.
              </h4>
              <br />
              <NavLink to="/">
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
          <h1>Blog Page</h1>
        </div>
      </div>
    </div>
  );
}

export default Blog;
