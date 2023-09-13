import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAndDoubts } from '../../features/auth/authSlice';
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
} from '@chakra-ui/react';

const Profile = () => {
  const { user, isLoading, userDoubts } = useSelector(state => state.auth);
  const [formData, setFormData] = useState({ image: '' });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAndDoubts());
  }, []);

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch();
    createDoubt({
      topic: formData.topic,
      question: formData.question,
    });
    setFormData({ topic: '', question: '' });
  };

  if (isLoading) {
    return <Spinner />;
  }

  const profileDoubts = userDoubts._idDoubt?.map(userDoubt => {
    return (
      <SimpleGrid
        spacing={20}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <Card key={userDoubt._id}>
          <CardHeader>
            <Heading size="md"> {userDoubt.topic}</Heading>
          </CardHeader>
          <CardBody>
            <Box className="image-container">
              <Image
                src={getImageURL(userDoubt.imagePath)}
                h="200px"
                w="100%"
                objectFit="cover"
                borderRadius="8px"
                className="image-zoom"
              />
            </Box>
            <Text>{userDoubt.question}</Text>
          </CardBody>
          <CardFooter>
            <Button>Ver duda</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    );
  });

  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="src/assets/logoAppunto.png"
            alt="users avatar"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">El perfil de {user.name}</Heading>
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
        </CardBody>
        <Divider color="red" />
        <CardFooter>
          <form onSubmit={onSubmit}>
            <Box p="4%">
              <FormLabel>Avatar (opcional)</FormLabel>
              <Input
                type="file"
                name="image"
                value={formData.image}
                onChange={onChange}
              />
            </Box>
            <Button variant="solid" colorScheme="teal" type="submit">
              Subir avatar
            </Button>
          </form>
        </CardFooter>
      </Card>
      <Box as="aside" ml="8%" mb="5%" mt="4%"></Box>

      <div>
        {user.name}'s doubts: {profileDoubts}
      </div>
      <p></p>
    </>
  );
};

export default Profile;
