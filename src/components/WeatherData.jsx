import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  useQuery,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-router";

const WeatherData = () => {
  const [weatherData, setWeatherData] = useState({});

  const weatherApi = async (cityName, apiKey) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    );
    const data = await response.json();
    setWeatherData({
      name: data.name,
      weather: data.weather[0].main,
      image: data.weather[0].icon,
      windSpeed: data.wind.speed,
    });
    return data;
    // console.log(Object.values(data.weather));
    // console.log(data.weather[0].icon);
    // 9f241cd8968b49fcf5b429eb9d19e8d6
  };
  useEffect(() => {
    weatherApi("Kathmandu", "9f241cd8968b49fcf5b429eb9d19e8d6");
  }, []);

  // This useQuery is not returning data or isloading

  const { data, isLoading } = useQuery({
    queryKey: ["weatherData"],
    queryFn: () => weatherApi("Kathmandu", "9f241cd8968b49fcf5b429eb9d19e8d6"),
  });
  console.log(data, isLoading);
  return (
    <>
      <Card
        maxW={"400px"}
        color={"whiteAlpha.400"}
        shadow={"sm"}
        boxShadow={"2xl"}
        style={{ backgroundColor: "#1B1B1D" }}
      >
        <CardHeader fontSize={"4xl"}>{weatherData.name}</CardHeader>
        <CardBody>
          <HStack>
            <Text fontSize={"xl"}>
              Weather Currently : {weatherData.weather}
            </Text>
            <Image
              src={`https://openweathermap.org/img/wn/${weatherData.image}@2x.png`}
            />
          </HStack>
          <Box>
            <Text fontSize={"2xl"} mt={"-30px"}>
              Wind Speed : km/h
            </Text>
          </Box>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In ullam
            facere ducimus ipsum natus dolore labore hic est quibusdam
            voluptatibus, delectus quasi, dolorum qui quos libero accusamus
            molestias esse non.
          </Text>
        </CardBody>
      </Card>
    </>
  );
};

export default WeatherData;
