import React, { useState } from "react";
import { Card, CardMedia, CardContent, Typography, Box, Button } from "@mui/material";
import Icon from '@mui/material/Icon';

const Carousel = () => {
  const cards = [
    { image: "/img/laravel_logo.png", title: "Laravel" },
    { image: "/img/react_logo.png", title: "React" },
    { image: "/img/mysql_logo.png", title: "MySql" },
    { image: "/img/mongo_db_logo.png", title: "Mongo DB" },
    { image: "/img/html_logo.png", title: "Html" },
    { image: "/img/css_logo.png", title: "CSS" },
    { image: "/img/kumbia_php_logo.png", title: "Kumbia PHP" },
    { image: "/img/php_logo.png", title: "PHP" },
    { image: "/img/ubuntu_logo.png", title: "Ubuntu" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [showLefttButton, setShowLeftButton] = useState(true);
  const [showRightButton, setShowRightButton] = useState(false);

  const prevSlide = () => {
    let hideLeftButton = startIndex > 1 ? false : true;
    setShowLeftButton(hideLeftButton);

    let hideRightButton = (cards.length - startIndex) >= 5 ? false : true;
    setShowRightButton(hideRightButton);
    setStartIndex(Math.max(0, startIndex - 1));
  };

  const nextSlide = () => {
    let hideLeftButton = startIndex + 1 >= 1 ? false : true;
    setShowLeftButton(hideLeftButton);

    let hideRightButton = (cards.length - startIndex) > 5 ? false : true;
    setShowRightButton(hideRightButton);

    setStartIndex(Math.min(cards.length - 1, startIndex + 1));
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Box display="flex" justifyContent="center" alignItems="center" position="relative">
        <Button 
          onClick={prevSlide} 
          hidden={showLefttButton}
          style={{ 
              position: "absolute", 
              left: -100, 
              zIndex: 1, 
              height:'100%', 
              color: 'black' }}>
                  <Icon baseClassName="fas" className="fa-solid fa-chevron-left" />
        </Button>
            {
                cards.slice(startIndex, startIndex + 4).map((card, index) => 
                    (
                      <Card key={startIndex + index} style={{ margin: "0 10px" }}>
                          <CardMedia
                              component="img"
                              alt={card.title}
                              height="200"
                              width="300"
                              image={card.image}
                              />
                          <CardContent>
                              <Typography textAlign={'center'} gutterBottom variant="h5" component="div">
                                  {card.title}
                              </Typography>
                          </CardContent>
                      </Card>
                    )
                )
            }
        <Button 
            onClick={nextSlide} 
            hidden={showRightButton}
            style={{ 
              position: "absolute", 
              right: -100, 
              zIndex: 1, 
              height:'100%', 
              color:'black' 
            }}>
                <Icon baseClassName="fas" className="fa-solid fa-chevron-right" />
        </Button>
      </Box>
    </div>
  );
};

export default Carousel;
