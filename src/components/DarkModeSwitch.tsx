import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      icon={isDark ? <SunIcon /> : <MoonIcon color={"whiteAlpha.900"} />}
      aria-label="Toggle Theme"
      bg={"#6c63ff"}
      onClick={toggleColorMode}
      _hover={{ bg: "" }}
    />
  );
};
