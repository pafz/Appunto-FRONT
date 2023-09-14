import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAndDoubts, changeAvatar } from "../../features/auth/authSlice";
import getImageURL from "../../app/utils";
import { Box, Card, CardBody, Image, Stack, Spinner, Tag, Text, Divider, Button, FormLabel, Input, SimpleGrid, CardHeader, HStack } from "@chakra-ui/react";

const Profile = () => {
    const { user, isLoading, userDoubts } = useSelector((state) => state.auth);
    const [image, setImage] = useState();
    const [clickCount, setClickCount] = useState(0);

    console.log(user);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAndDoubts());
    }, []);

    const onChange = (e) => {
        setImage(e.target.files[0]);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("avatar", image);
        dispatch(changeAvatar(formData));
        e.target.value = "";
    };
    const handleIncrementClick = () => {
        setClickCount((prevCount) => prevCount + 1);
    };

    if (isLoading) {
        return <Spinner />;
    }

    const profileDoubts = userDoubts._idDoubt?.map((userDoubt) => {
        return (
            <Box key={userDoubt._id}>
                <Card w="80%">
                    <CardHeader>
                        <Text fontSize="xl" mt="2" pt="3%">
                            <Tag colorScheme="teal">{userDoubt.topic ? userDoubt.topic.toUpperCase() : ""}</Tag>
                        </Text>
                    </CardHeader>
                    <CardBody>
                        <Image src={getImageURL(userDoubt.imagePath)} h="200px" w="100%" objectFit="cover" borderRadius="8px" />

                        <Text as="b" pt="5">
                            {userDoubt.question}
                        </Text>
                    </CardBody>
                </Card>
            </Box>
        );
    });

    return (
        <>
            <HStack>
                <Card w="40%" h="80vh" boxShadow="2xl" display="flex" alignItems="center" justifyContent="center">
                    <Box maxW="sm">
                        <Image src={getImageURL(user.avatar)} alt="users avatar" borderRadius="50%" w="200px" />
                    </Box>
                    <Box maxW="sm">
                        <Stack mt="6" spacing="3">
                            <Text textAlign="center" color="teal" fontSize="2xl">
                                {user.name}
                            </Text>
                            <Text textAlign="center" fontSize="0.9em" color="gray.500">
                                {user.role.toUpperCase()}
                            </Text>
                            <Text textAlign="center" color="teal" fontSize="1.1em">
                                {user.email}
                            </Text>
                        </Stack>
                        <Divider w="90%" p="5%" color="teal.500" alignSelf="center" />
                        <Box mt="5%">
                            <form onSubmit={onSubmit}>
                                <Box p="4%">
                                    <FormLabel textAlign="center" color={"GrayText"}>
                                        Avatar (opcional)
                                    </FormLabel>
                                    <Input type="file" name="image" onChange={onChange} />
                                </Box>
                                <Button ml="30%" mt="5%" variant="solid" colorScheme="teal" type="submit">
                                    Sube tu avatar
                                </Button>
                            </form>
                        </Box>
                    </Box>
                    <Box mt={9} p={4} align="center">
                        <Text fontSize="lg" fontWeight="bold">
                            Puntos: {clickCount}
                        </Text>
                        <Image src="src/assets/logoAppunto.png" alt="Logo de Appunto" onClick={handleIncrementClick} style={{ cursor: "pointer" }} w="50px" />
                    </Box>
                </Card>

                <Box pl="5%">
                    <Text fontSize="1.2em" color="teal" m="0.7em">
                        Dudas:
                    </Text>
                    <SimpleGrid columns="5">{profileDoubts}</SimpleGrid>
                </Box>
            </HStack>
        </>
    );
};

export default Profile;
