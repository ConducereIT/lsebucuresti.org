import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const CardView = ({
  styleCard,
  CardHeaderStyle,
  ImgSrc,
  ImgAlt,
  CardBodyStyle,
  CardTitle,
  CardText,
  FooterActive,
  FooterText,
  FooterStyle,
}) => {
  return (
    <Card className={styleCard}>
      <CardHeader color="blue-gray" className={`${CardHeaderStyle}`}>
        <img src={ImgSrc} alt={ImgAlt} className="h-full" />
      </CardHeader>
      <CardBody className={`${CardBodyStyle}`}>
        <Typography variant="h5" color="blue-gray" className="mb-2 mt-10">
          {CardTitle}
        </Typography>
        <Typography>{CardText}</Typography>
      </CardBody>
      {FooterActive ? (
        <CardFooter className={`${FooterStyle}`}>
          <Button>{FooterText}</Button>
        </CardFooter>
      ) : (
        <></>
      )}
    </Card>
  );
};

export default CardView;
