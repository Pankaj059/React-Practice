import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Form, Link, NavLink } from "react-router";
import Search from "./Search";
import { GrAnalytics } from "react-icons/gr";

function CountryCard() {
  const [countryData, setCountryData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchCountryApi = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountryData(data);
    };
    fetchCountryApi();
  }, []);

  return (
    <>
      <Box>
        <Search setQuery={setQuery} />
      </Box>
      <Flex
        wrap={"wrap"}
        direction={"row"}
        gap={"20px"}
        padding={"10px"}
        ml={"10px"}
        margin="10px"
      >
        {countryData
          .filter((country) =>
            country.name.common.toLowerCase().includes(query)
          )
          .map((country, i) => {
            return (
              <>
                <Box key={i}>
                  <Card
                    display={"flex"}
                    flexWrap={"wrap"}
                    width={"390px"}
                    bg={"gray.200"}
                  >
                    <CardHeader>
                      <Box>
                        <Image
                          src={country.flags.png}
                          mb={"10px"}
                          width={"320px"}
                          height={"250px"}
                        ></Image>
                        <Heading
                          as={"h2"}
                          fontSize={"customMedium"}
                          color={"GrayText"}
                          _hover={{ color: "purple.400" }}
                        >
                          {" "}
                          {country.name.common}
                        </Heading>
                      </Box>
                    </CardHeader>
                    <CardBody fontSize={"customSmall"}>
                      <Box color={"gray.700"}>
                        <Text>
                          {" "}
                          Population :{" "}
                          {country.population.toLocaleString("en-IN")}
                        </Text>
                        <Text> Capital City : {country.capital}</Text>
                        <Text>
                          {" "}
                          Languages:{" "}
                          {Object.values(country.languages || {}).join(", ")}
                        </Text>
                        <Text>
                          {" "}
                          Currencies:{" "}
                          {Object.values(country.currencies || {})
                            .map((curr) => curr.name)
                            .join(", ")}
                        </Text>
                        <Text>Continents : {country.continents}</Text>
                      </Box>
                    </CardBody>

                    <CardFooter>
                      <Link to={`/countryDetail?name=${country.name.common}`}>
                        <Button
                          type="submit"
                          variant={"outline"}
                          display={"flex"}
                          margin={"0 auto"}
                          colorScheme="purple"
                          _hover={{ bg: "purple.600", color: "gray.50" }}
                        >
                          View Country
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </Box>
              </>
            );
          })}
      </Flex>
    </>
  );
}

export default CountryCard;
