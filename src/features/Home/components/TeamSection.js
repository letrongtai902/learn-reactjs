import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardBlogHome from '../../../components/CardBlogHome';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import styles from '../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle';

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>HÀNH TRÌNH Ừ MAI</h2>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <CardBlogHome
              imglink="https://firebasestorage.googleapis.com/v0/b/dataumaifruits.appspot.com/o/image%2Ftim-lai-huong-xua.jpg?alt=media&token=09939b1b-2624-4a83-8c7b-98b770c3b55b"
              description="Người tiêu dùng càng ngày càng nhận thấy rằng thực phẩm ngày nay đã đánh mất dần hương vị đặc trưng. Đặc biệt ở thành thị, mặc dù mẫu mã ngày càng trở nên đa dạng, phong phú, nhưng về chất lượng hương vị được đánh giá là bị suy giảm rất nhiều so với trước đây."
              creatTime="1/1/2021"
              title="TÌM LẠI HƯƠNG XƯA"
              brcolor="red"
            ></CardBlogHome>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CardBlogHome
              imglink="https://firebasestorage.googleapis.com/v0/b/dataumaifruits.appspot.com/o/image%2Fnoi-long-ke-trong-cay.jpg?alt=media&token=92f58fd9-0713-4293-a806-546c6a718df6"
              description={
                '‘Giải cứu nông sản’ và ‘thực phẩm sạch’ đá trở thành 2 cụm từ không còn xa lạ với người Việt. Trong khi kẻ trồng cây luôn phải lo lắng về mùa vụ, thời tiết, đầu ra và đôi khi còn phải trả giá cả sức khỏe để có thu nhập.'
              }
              creatTime={'1/1/2021'}
              title={'NỖI LÒNG KẺ TRỒNG CÂY, NỖI LO CỦA KẺ ĂN TRÁI'}
              brcolor="green"
              avatarName="T"
            ></CardBlogHome>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CardBlogHome
              imglink={
                'https://bizweb.dktcdn.net/thumb/large/100/263/497/files/379-diet-nutrition-2-why-fruits-and-vegetables-are-important.jpg?v=1507795032317'
              }
              description={
                'Hàng nông sản muốn tham gia chuỗi giá trị toàn cầu cần phải cải tiến từ khâu giống, thuốc bảo vệ thực vật, các quy trình phân bón từ lúc gieo trồng cho đến lúc thu hoạch.'
              }
              creatTime={'1/1/2021'}
              title={'GIA TĂNG NĂNG LỰC CẠNH TRANH CHO NÔNG SẢN XUẤT KHẨU'}
              brcolor="blue"
              avatarName="A"
            ></CardBlogHome>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
