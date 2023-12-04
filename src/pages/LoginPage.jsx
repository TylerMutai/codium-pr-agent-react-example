import React from 'react';
import {Button, CardBody, Flex, FormControl, FormLabel, Heading, Icon, Input, Stack} from "@chakra-ui/react";
import strings from "../utils/localization/main";
import CustomCardHeader from "../components/CustomCardHeader";
import CustomCard from "../components/CustomCard";
import {RiShieldUserLine} from "react-icons/ri";
import CustomCardFooter from "../components/CustomCardFooter";

function LoginPage() {

  return (
    <Flex w={"100%"} minH={"100vh"} flexDirection={"column"}
          justifyContent={"center"} alignItems={"center"}>
      <CustomCard>
        <CustomCardHeader>
          <Icon as={RiShieldUserLine}/>
          <Heading size='md'>{strings.login}</Heading>
        </CustomCardHeader>
        <CardBody>
          <Stack spacing='6'>
            <FormControl>
              <FormLabel>{strings.email}</FormLabel>
              <Input type='email' name={"email"} isRequired={true}/>
            </FormControl>
            <FormControl>
              <FormLabel>{strings.password}</FormLabel>
              <Input type='password' name={"password"} isRequired={true}/>
            </FormControl>
          </Stack>
        </CardBody>
        <CustomCardFooter>
          <Button>
            {strings.login}
          </Button>
        </CustomCardFooter>
      </CustomCard>
    </Flex>
  );
}

export default LoginPage;