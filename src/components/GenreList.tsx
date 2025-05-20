import {
  Box,
  List,
  ListItem,  
  Button,
  Text,
  Avatar,
  Float,
  Circle,
} from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import Spinner from './ui/spinner';

interface Genre {
  id: number;
  name: string;
  image_background?: string;
}

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenre();

  if (isLoading) return <Spinner />;
  if (error) return <Text color="red.500">Failed to load genres.</Text>;

  return (
    <Box>
      <List.Root>
        {/* Static "Genres" item */}
        <ListItem py="2">
          <Box display="flex" alignItems="center">
            <Box mr="3">
              <Avatar.Root colorPalette="blue" variant="subtle">
                <Avatar.Fallback name="Genres" />
                <Float placement="bottom-end" offsetX="1" offsetY="1">
                  <Circle
                    bg="blue.500"
                    size="8px"
                    outline="0.2em solid"
                    outlineColor="bg"
                  />
                </Float>
              </Avatar.Root>
            </Box>
            <Button
              variant="outline"
              border="none"
              size="sm"
              _hover={{ bg: 'gray.100' }}
              _active={{ bg: 'gray.200' }}
            >
              Genres
            </Button>
          </Box>
        </ListItem>

        {/* Dynamic genre items */}
        {genres?.map((genre: Genre) => (
          <ListItem key={genre.id} py="2">
            <Box display="flex" alignItems="center">
              <Box mr="3">
                <Avatar.Root colorPalette="green" variant="subtle">
                  <Avatar.Fallback name={genre.name} />
                  {genre.image_background && (
                    <Avatar.Image src={genre.image_background} alt={genre.name} />
                  )}
                </Avatar.Root>
              </Box>
              <Button
                variant="outline"
                border="none"
                size="sm"
                _hover={{ bg: 'gray.100' }}
                _active={{ bg: 'gray.200' }}
              >
                {genre.name}
              </Button>
            </Box>
          </ListItem>
        ))}
      </List.Root>
    </Box>
  );
};

export default GenreList;















