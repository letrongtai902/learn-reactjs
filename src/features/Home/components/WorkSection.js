import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import CustomInput from '../../../components/CustomInput/CustomInput';
import Button from '../../../components/CustomButtons/Button';

import styles from '../../../assets/jss/material-kit-react/views/landingPageSections/workStyle';

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>THÔNG TIN LIÊN HỆ</h2>
          <h4 className={classes.description}>
            Liên hệ với chúng tôi để chúng tôi có cơ hội đem đến cho bạn thực phẩm sạch nhất, an toàn nhất của chúng tôi
          </h4>
          <br />
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Tên của bạn"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Địa chỉ email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Lời nhắn với chúng tôi"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button color="success"> Gửi đến chúng tôi </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
