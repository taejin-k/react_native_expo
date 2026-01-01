import Wrapper from "@/components/common/Wrapper";
import { Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Search = () => {
  const insets = useSafeAreaInsets();

  return (
    <Wrapper>
      <Text>Search Page</Text>
    </Wrapper>
  );
};

export default Search;
