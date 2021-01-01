import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import styles from '../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle';
import Card from '../../../components/Card/Card';
import team1 from '../../../assets/img/quyt-hong.jpg';
import team2 from '../../../assets/img/rau-sach.jpg';
import team3 from '../../../assets/img/thuc-pham-kho.jpg';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>SẢN PHẨM CỦA Ừ MAI</h2>
          <h5 className={classes.description}>
            Tại Ừ Mai Food chúng tôi tin rằng sẽ giúp khách hàng tìm lại nguyên vị ngon của nông sản vùng miền và đem
            lại cho khách hàng những sản phẩm tươi ngon, chất lượng, đảm bảo vệ sinh an toàn thực phẩm với giá thành tốt
            nhất.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="250"
                  image={team1}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    TRÁI CÂY MIỆT VƯỜN
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Trái cây miệt vườn - đặc sản vùng miền như: xoài cát Hòa Lộc, cam xoàn Đồng Tháp, vải thiều Bắc
                    Giang, bơ 034 Đăk Lăk, ...
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <CardActionArea>
                <CardMedia component="img" alt="rau tự nhiên" height="250" image={team2} title="rau tự nhiên" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    RAU TỰ NHIÊN
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Rau sạch trồng tại nhà không thuốc trừ sâu và được trồng với 100% là phân bón hữu cơ, giúp bảo vệ
                    sức khỏe một cách tốt nhất
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="250"
                  image={team3}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    THỰC PHẨM ĐÓNG GÓI
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Thực phẩm khô thực phẩm đóng gói được làm trực tiếp bằng phương pháp thủ công của người nông dân
                    như: chuối khô, xoài khô,...
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
