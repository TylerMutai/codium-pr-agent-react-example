import {chakra, Flex} from "@chakra-ui/react";
import frontendPaths from "../../utils/values/frontendPaths";
import strings from "../../utils/localization/main";
import NavbarItem from "./NavbarItem";
import LanguageSwitch from "../LanguageSwitch";


const NavBar = () => {

  return (
    <chakra.nav display={"flex"} flexDirection={"row"}
                alignItems={{
                  base: "center",
                }}
                justifyContent={"space-between"} w={"100%"}
                backgroundColor={"transparent"}
                py={"20px"} px={"20px"}>
      <Flex alignItems={{
        base: "center",
      }} w={"100%"} gap={"24px"}
            flexDirection={{
              base: "row",
            }}>
        <NavbarItem to={"/"}>{strings.home}</NavbarItem>
        <NavbarItem to={frontendPaths.login}>{strings.login}</NavbarItem>
        <NavbarItem to={frontendPaths.registration}>{strings.register}</NavbarItem>
      </Flex>
      <LanguageSwitch/>
    </chakra.nav>
  )
}

export default NavBar