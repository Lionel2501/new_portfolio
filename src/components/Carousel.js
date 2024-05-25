import React, { useState } from "react";
import { Card, CardMedia, CardContent, Typography, Box, Button } from "@mui/material";
import Icon from '@mui/material/Icon';

// Importar las imágenes
import image1 from "../../public/demo/img/arte_y_parte.jpg";
import image2 from "../../public/demo/img/arte_y_parte.jpg";
import image3 from "../../public/demo/img/arte_y_parte.jpg";
import image4 from "../../public/demo/img/arte_y_parte.jpg";
import image5 from "../../public/demo/img/arte_y_parte.jpg";
import image6 from "../../public/demo/img/arte_y_parte.jpg";
import image7 from "../../public/demo/img/arte_y_parte.jpg";
import image8 from "../../public/demo/img/arte_y_parte.jpg";
import image9 from "../../public/demo/img/arte_y_parte.jpg";
import image10 from "../../public/demo/img/arte_y_parte.jpg";
import image11 from "../../public/demo/img/arte_y_parte.jpg";
import image12 from "../../public/demo/img/arte_y_parte.jpg";
import image13 from "../../public/demo/img/arte_y_parte.jpg";
import image14 from "../../public/demo/img/arte_y_parte.jpg";
import image15 from "../../public/demo/img/arte_y_parte.jpg";

const Carousel = () => {
  const cards = [
    { image: image1, title: "Tecnología 1" },
    { image: image2, title: "Tecnología 2" },
    { image: image3, title: "Tecnología 3" },
    { image: image4, title: "Tecnología 4" },
    { image: image5, title: "Tecnología 5" },
    { image: image6, title: "Tecnología 6" },
    { image: image7, title: "Tecnología 7" },
    { image: image8, title: "Tecnología 8" },
    { image: image9, title: "Tecnología 9" },
    { image: image10, title: "Tecnología 10" },
    { image: image11, title: "Tecnología 11" },
    { image: image12, title: "Tecnología 12" },
    { image: image13, title: "Tecnología 13" },
    { image: image14, title: "Tecnología 14" },
    { image: image15, title: "Tecnología 15" }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [showRightButton, setShowRightButton] = useState(true);

  const prevSlide = () => {
    setStartIndex(Math.max(0, startIndex - 1));
  };

  const nextSlide = () => {
    setStartIndex(Math.min(cards.length - 1, startIndex + 1));
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Box display="flex" justifyContent="center" alignItems="center" position="relative">
        <Button 
            onClick={prevSlide} 
            hidden={showRightButton}
            style={{ 
                position: "absolute", 
                left: -100, 
                zIndex: 1, 
                height:'100%', 
                color: 'black' }}>
                    <Icon baseClassName="fas" className="fa-solid fa-chevron-left" />
        </Button>
            {
                cards.slice(startIndex, startIndex + 5).map((card, index) => {
/*                     if((cards.length - startIndex) >= 5){
                        setShowRightButton(false)
                    } */
                    return (
                        <Card key={startIndex + index} style={{ margin: "0 10px" }}>
                            <CardMedia
                                component="img"
                                alt={card.title}
                                height="200"
                                width="300"
                                image={card.image}
                                />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {card.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                })
            }
        <Button 
            onClick={nextSlide} 
            style={{ position: "absolute", right: -100, zIndex: 1, height:'100%', color:'black' }}>
                <Icon baseClassName="fas" className="fa-solid fa-chevron-right" />
        </Button>
      </Box>
    </div>
  );
};

export default Carousel;
