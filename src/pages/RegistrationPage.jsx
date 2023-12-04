import React from 'react';
import {
  Button,
  CardBody,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Icon,
  Input,
  Stack
} from "@chakra-ui/react";
import strings from "../utils/localization/main";
import CustomCard from "../components/CustomCard";
import CustomCardHeader from "../components/CustomCardHeader";
import {FiUserPlus} from "react-icons/fi";
import CustomCardFooter from "../components/CustomCardFooter";

function RegistrationPage() {

  return (
    <Flex w={"100%"} minH={"100vh"} flexDirection={"column"}
          justifyContent={"center"} alignItems={"center"}>
      <CustomCard>
        <CustomCardHeader>
          <Icon as={FiUserPlus}/>
          <Heading size='md'>{strings.register}</Heading>
        </CustomCardHeader>
        <CardBody>
          <Stack spacing='6'>
            <FormControl>
              <FormLabel>{strings.email}</FormLabel>
              <Input type='email' name={"email"} isRequired={true}/>
              <FormHelperText>{strings.wont_share_email}</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>{strings.password}</FormLabel>
              <Input type='password' name={"password"} isRequired={true}/>
            </FormControl>
            <FormControl>
              <FormLabel>{strings.confirm_password}</FormLabel>
              <Input type='password' name={"confirm_password"} isRequired={true}/>
            </FormControl>
          </Stack>
        </CardBody>
        <CustomCardFooter>
          <Button>
            {strings.register}
          </Button>
        </CustomCardFooter>
      </CustomCard>
    </Flex>
  );
}

export default RegistrationPage;