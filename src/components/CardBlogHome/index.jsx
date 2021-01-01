import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Card from '../Card/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

CardBlogHome.propTypes = {
  avatarName: PropTypes.string,
  imglink: PropTypes.string,
  description: PropTypes.string,
  creatTime: PropTypes.string,
  title: PropTypes.string,
  brcolor: PropTypes.string,
};
CardBlogHome.defaultProps = {
  avatarName: 'U',
  imglink: 'link ảnh',
  description: 'mô tả cho bài viết',
  creatTime: '1/1/2021',
  title: 'TIÊU ĐỀ BÀI VIẾT',
};

export default function CardBlogHome(props) {
  const classes = useStyles();
  const { avatarName, imglink, description, creatTime, title, brcolor } = props;
  return (
    <Card plain>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" style={{ backgroundColor: brcolor }}>
              {avatarName}
            </Avatar>
          }
          title={title}
          subheader={creatTime}
          style={{ textAlign: 'left' }}
        />
        <CardMedia className={classes.media} image={imglink} title="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
