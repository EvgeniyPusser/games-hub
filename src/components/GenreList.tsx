import React from 'react';
import {
  List,
  ListItem,
  Avatar,
  Button,
  HStack,
  Box,
  Text,
} from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import Spinner from './ui/spinner';

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenre<any>();

  if (isLoading) return <Spinner />;
  if (error) return <Text color="red.500" fontSize="xl">{error}</Text>;

  return (
    <Box p={4}>
      <List spacing={3}>
        {genres?.map((genre: any) => (
          <ListItem key={genre.id}>
            <HStack spacing={4}>
              <Avatar
                size="sm"
                name={genre.name}
                src={genre.image_background || undefined}
              />
              <Button
                variant="outline"
                border="none"
                size="sm"
                _hover={{ bg: 'gray.100' }}
                _active={{ bg: 'gray.200' }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GenreList;














