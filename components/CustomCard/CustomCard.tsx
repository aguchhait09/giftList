import { customCardProps } from "@/interface/customCard.interface";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography
} from "@mui/material";
import { red } from "@mui/material/colors";

const CustomCard = ({
  title,
  subtitle,
  cardImage,
  price,
  offerPrice
}: customCardProps) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              {/* <MoreVertIcon /> */}
            </IconButton>
          }
          title={title}
          subheader={subtitle}
        />
        <CardMedia
          component="img"
          height={50}
          image={cardImage}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {offerPrice}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CustomCard;
