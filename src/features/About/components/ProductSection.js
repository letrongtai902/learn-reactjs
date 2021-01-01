import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import styles from '../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle';

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12}>
          <h2 className={classes.title} style={{ color: '#1b5633' }}>
            ĐÔI NÉT VỀ Ừ MAI
          </h2>
          <h5 className={classes.content}>
            Ừ Mai là một dự án được ấp ủ bởi những con người trẻ tuổi. Những người đã hành trang cơm áo đến các nước
            nông nghiệp phát triển bậc nhất Thế Giới như Nhật Bản, Israel với ước mơ&nbsp;đem kiến thức trở về
            và&nbsp;gieo thành quả ngọt trên đất mẹ.&nbsp;
          </h5>
          <h5 className={classes.content}>
            Năm 2020, Ừ Mai được khai sinh với mong muốn đem vị ngon, vị ngọt từ trái cây đặc sản quê hương vươn tầm Thế
            Giới.
          </h5>
          <h5 className={classes.content}>
            Umai - tiếng Nhật nghĩa là Ngon. Trong tiếng Việt, tên Ừ Mai mang đậm nét thân thuộc, dân dã như gọi tên một
            cô gái thôn quê dịu dàng, ngọt ngào.&nbsp;
          </h5>
          <h5 className={classes.content}>
            Cũng giống như ý nghĩa của tên Ừ Mai, chúng tôi mang trong mình sứ mệnh Tìm Lại Hương Xưa trong từng trái
            cây chín mùa - hương vị của đất trời mà tất cả những ai thuộc về thế hệ 8X và 9X từng được thưởng thức khi
            còn thơ bé.
          </h5>
          <h5 className={classes.content}>
            <em>Ừ Mai mong muốn được góp phần giải quyết</em>:
          </h5>
          <ul>
            <li dir="ltr">
              <h5 className={classes.content}>Những vấn đề khó khăn về đầu ra nông sản cho những người nông dân;</h5>
            </li>
            <li dir="ltr">
              <h5 className={classes.content}>Nỗi trăn trở về thực phẩm sạch và an toàn của Khách hàng;</h5>
            </li>
            <li dir="ltr">
              <h5 className={classes.content}>
                Bảo nguyên được nét đặc trưng của vị ngon, vị ngọt của trái cây đến tận tay khách hàng: Ngon như vừa mới
                hái.
              </h5>
            </li>
          </ul>
          <h5 className={classes.content}>
            <strong style={{ color: '#1b5633' }}>TRIẾT LÝ CỦA Ừ MAI </strong>
          </h5>
          <ul>
            <li>
              <h5 className={classes.content}>
                Con người là giá trị căn bản của Ừ Mai: Niềm vui của nông dân, sự tận tâm và trung thực của đội ngũ
                chuyên nghiệp và sự hài lòng của khách hàng;
              </h5>
            </li>
            <li>
              <h5 className={classes.content}>
                Tìm lại và bảo nguyên vị ngon, ngọt của trái cây đặc sản vùng miền và đem lại cho khách hàng những sản
                phẩm tươi ngon, chất lượng, đảm bảo vệ sinh an toàn thực phẩm với giá thành tốt nhất.
              </h5>
            </li>
          </ul>
          <h5 className={classes.content}>
            &nbsp;<strong style={{ color: '#1b5633' }}>ĐỊNH HƯỚNG PHÁT TRIỂN CỦA Ừ MAI </strong>
          </h5>
          <ul>
            <li>
              <h5 className={classes.content}>
                Hợp tác với nông dân, xây dựng mạng lưới phân phối chặt chẽ để kiểm soát chất lượng từ vườn đến tận tay
                khách hàng.
              </h5>
            </li>
          </ul>
          <ul>
            <li>
              <h5 className={classes.content}>
                Xây dựng đội ngũ năng động, tận tâm và chuyên nghiệp để đáp ứng nhu cầu thị trường: Ngon - An toàn - Đủ
                nguồn cung ứng;
              </h5>
            </li>
            <li>
              <h5 className={classes.content}>
                Hướng đến xuất khẩu và xây dựng thương hiệu nông sản Việt vững mạnh trên thị trường Thế Giới.
              </h5>
            </li>
          </ul>
          <h5 className={classes.content}>
            <strong style={{ color: '#1b5633' }}>SẢN PHẨM CỦA Ừ MAI </strong>
          </h5>
          <ul>
            <li>
              <h5 className={classes.content}>
                Trái cây miệt vườn - đặc sản vùng miền như: xoài cát Hòa Lộc, cam xoàn&nbsp;Đồng Tháp, vải thiều Bắc
                Giang, bơ 034 Đăk Lăk,&nbsp;...
              </h5>
            </li>
            <li>
              <h5 className={classes.content}>
                Rau tự nhiên: Rau sạch trồng tại nhà không thuốc trừ sâu và được trồng với 100% là phân bón hữu cơ, giúp
                bảo vệ sức khỏe một cách tốt nhất
              </h5>
            </li>
            <li>
              <h5 className={classes.content}>
                Thực phẩm đóng gói: Thực phẩm khô thực phẩm đóng gói được làm trực tiếp bằng phương pháp thủ công của
                người nông dân như: chuối khô, xoài khô,...{' '}
              </h5>
            </li>
          </ul>
          <h5 className={classes.content}>
            <strong style={{ color: '#1b5633' }}>VỀ CHẤT LƯỢNG SẢN PHẨM</strong>
          </h5>
          <h5 className={classes.content}>
            <em>Chuẩn kho:</em>
          </h5>
          <ul>
            <li>
              <h5 className={classes.content}>
                Trái cây đạt tiêu chuẩn về xuất xứ nguồn gốc, không dư lượng thuốc bảo vệ thực vật và hướng đến phương
                pháp canh tác 03 không: không phân hóa học - không thuốc trừ sâu - không chất kích thích sinh
                trưởng.&nbsp;
              </h5>
            </li>
            <li>
              <h5 className={classes.content}>
                Hướng đến hoàn thiện và tối ưu&nbsp;tiêu chuẩn vệ sinh an toàn thực phẩm của Bộ Công Thương, tiêu chuẩn
                chất lượng ISO, HACCP của châu Âu từ khâu sản xuất đến tay người tiêu dùng.
              </h5>
            </li>
            <li>
              <h5 className={classes.content}>
                Hướng đến hoàn thiện và tối ưu&nbsp;hệ thống tiêu chuẩn vệ sinh an toàn thực phẩm về kho lưu trữ và kho
                chế biến của bộ Nông Nghiệp;
              </h5>
            </li>
          </ul>
          <h5 className={classes.content}>
            <em>Chuẩn cửa hàng:</em>
          </h5>
          <ul>
            <li>
              <h5 className={classes.content}>
                Hướng đến đạt tiêu chuẩn vệ sinh an toàn thực phẩm của bộ Công Thương về chất lượng và nguồn gốc xuất xứ
                an toàn thực phẩm.
              </h5>
            </li>
          </ul>
          <h5 className={classes.content}>&nbsp;</h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
