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
    <Card className={`${styleCard}`}>
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={ImgSrc} alt={ImgAlt} />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 mt-10">
          {CardTitle}
        </Typography>
        <Typography>{CardText}</Typography>
      </CardBody>
      {FooterActive ? (
        <CardFooter className="pt-0 bg-black">
          <Button>{FooterText}</Button>
        </CardFooter>
      ) : (
        <></>
      )}
    </Card>
  );
};

export default CardView;
