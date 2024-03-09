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
        <CardHeader title={title} subheader={subtitle} />
        <CardMedia
          component="img"
          image={cardImage}
          alt="Paella dish"
          sx={{
            maxHeight: 300
          }}
          loading="lazy"
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
