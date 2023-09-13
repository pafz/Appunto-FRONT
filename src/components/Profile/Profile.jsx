import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAndDoubts, changeAvatar } from '../../features/auth/authSlice';
import getImageURL from '../../app/utils';
import {
  Box,
  Card,
  CardBody,
  Image,
  Stack,
  Spinner,
  Heading,
  Text,
  Divider,
  CardFooter,
  Button,
  FormLabel,
  Input,
  SimpleGrid,
  CardHeader,
  Flex,
} from '@chakra-ui/react';

const Profile = () => {
  const { user, isLoading, userDoubts } = useSelector(state => state.auth);
  const [image, setImage] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAndDoubts());
  }, []);

  const onChange = e => {
    setImage(e.target.files[0]);
  };

  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar', image);
    dispatch(changeAvatar(formData));
    e.target.value = '';
  };

  if (isLoading) {
    return <Spinner />;
  }

  const profileDoubts = userDoubts._idDoubt?.map(userDoubt => {
    return (
      <Box className="image-container" key={userDoubt._id}>
        <Card>
          <CardHeader>
            <Heading size="md"> {userDoubt.topic}</Heading>
          </CardHeader>
          <CardBody>
            <Image
              src={getImageURL(userDoubt.imagePath)}
              h="200px"
              w="100%"
              objectFit="cover"
              borderRadius="8px"
              className="image-zoom"
            />

            <Text>{userDoubt.question}</Text>
          </CardBody>
          <CardFooter>
            <Button>Ver duda</Button>
          </CardFooter>
        </Card>
      </Box>
    );
  });

  return (
    <>
      <Flex align="stretch" gap="3em" direction="row" justify="center">
        <Box maxW="sm">
          <Image
            src={getImageURL(user.avatar)}
            alt="users avatar"
            borderRadius="lg"
          />
        </Box>
        <Box maxW="sm">
          <Stack mt="6" spacing="3">
            <Text color="teal" fontSize="2xl">
              nombre: {user.name}
            </Text>
            <Text color="teal" fontSize="2xl">
              email: {user.email}
            </Text>
            <Text color="teal" fontSize="2xl">
              edad: {user.age}
            </Text>
          </Stack>
          <form onSubmit={onSubmit}>
            <Box p="4%">
              <FormLabel color={'GrayText'}>Avatar (opcional)</FormLabel>
              <Input type="file" name="image" onChange={onChange} />
            </Box>
            <Button variant="solid" colorScheme="teal" type="submit">
              Subir avatar
            </Button>
          </form>
        </Box>
      </Flex>
      <div>
        <Text fontSize="7xl" color="teal" align="center" m="0.7em">
          Dudas:
        </Text>
        <SimpleGrid columns="5" spacingX="40px" spacingY="20px">
          {profileDoubts}
        </SimpleGrid>
      </div>
      <p></p>
    </>
  );
};

export default Profile;
