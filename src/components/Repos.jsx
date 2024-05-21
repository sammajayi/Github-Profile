import React from "react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import {
  Heading,
  Text,
  Stack,
  Divider,
  Button,
  ButtonGroup,
  Image,
} from "@chakra-ui/react";

const Repos = ({ avatarURL, githubUsername, repoData, repoURL }) => {
  return (
    <div>
      <Card maxW="sm">
        <CardBody>
          <Image src={avatarURL} alt="Github Repo Avarter" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{githubUsername}</Heading>
            <Text>{repoData}</Text>
          </Stack>
        </CardBody>
        {/* <Divider /> */}
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              <a target="_blank" href={repoURL}>
                View{" "}
              </a>
            </Button>
            <Button variant="solid" colorScheme="red">
              Delete
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Repos;
