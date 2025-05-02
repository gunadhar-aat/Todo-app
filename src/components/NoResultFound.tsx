import React from "react";
import { Stack } from "@chakra-ui/react";
import Image from "next/image";
import notFoundImg from "../assests/empty.png";

const NoResultFound = () => {
  return (
    <Stack
      pt={20}
      mt={5}
      alignItems={"center"}
      justifyContent={"center"}
      width={"full"}
    >
      <Image src={notFoundImg} alt="No Result Found" width={200} height={200} />
      <h1 style={{ textAlign: "center", color: "#6c63ff", fontWeight: "bold" }}>
        No Result Found
      </h1>
    </Stack>
  );
};

export default NoResultFound;
