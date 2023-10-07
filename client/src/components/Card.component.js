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
  AmprentaIsActive,
  CardBodyStyle,
  CardTitle,
  CardTitleStyle,
  CardText,
  CardTextStyle,
  FooterActive,
  FooterText,
  FooterStyle,
  FooterButtonOnClickEvent,
  AmprentaSVG,
}) => {
  return (
    <Card className={styleCard}>
      {AmprentaIsActive ? (
        <img
          src={AmprentaSVG}
          alt="Amprenta LSE"
          className="z-10 h-16 w-16 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1 bg-gray-200  rounded-full opacity-95 shadow-lg shadow-white"
        />
      ) : (
        <></>
      )}
      <CardHeader color="blue-gray" className={`${CardHeaderStyle}`}>
        <img src={ImgSrc} alt={ImgAlt} className="h-full" />
      </CardHeader>
      <CardBody className={`${CardBodyStyle}`}>
        <Typography
          variant="h5"
          color="blue-gray"
          className={`${CardTitleStyle} mb-2 mt-10`}
        >
          {CardTitle}
        </Typography>
        <Typography className={`${CardTextStyle}`}>{CardText}</Typography>
      </CardBody>
      {FooterActive ? (
        <CardFooter className={`${FooterStyle}`}>
          <Button className="w-full" onClick={FooterButtonOnClickEvent}>
            {FooterText}
          </Button>
        </CardFooter>
      ) : (
        <></>
      )}
    </Card>
  );
};

export default CardView;
