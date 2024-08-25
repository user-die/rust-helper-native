import { SelectList } from "react-native-dropdown-select-list";
import Search from "./Search";
import Caret from "./Caret";
import X from "./X";
import type { Build } from "@/raidData/types";

const Select = ({
  dispatch,
  buildsData,
}: {
  dispatch: any;
  buildsData: Build[];
}) => {
  return (
    <SelectList
      setSelected={(value: string) =>
        dispatch({ type: "ADD_ITEM", payload: Number(value) })
      }
      data={buildsData}
      placeholder="Выберите цель"
      searchPlaceholder="Поиск ..."
      notFoundText="Ничего не найдено"
      boxStyles={{
        borderColor:
          "linear-gradient(90deg, rgb(23, 181, 212), rgb(66, 142, 230))",
        borderWidth: 2,
        position: "relative",
        marginHorizontal: 8,
        alignItems: "center",
      }}
      inputStyles={{
        color: "#ffffff",
      }}
      dropdownStyles={{
        borderColor:
          "linear-gradient(90deg, rgb(23, 181, 212), rgb(66, 142, 230))",
        borderWidth: 2,
        backgroundColor: "#212121",
        marginHorizontal: 8,
      }}
      dropdownTextStyles={{
        color: "#efefef",
      }}
      dropdownItemStyles={{
        backgroundColor:
          "linear-gradient(90deg, rgb(23, 181, 212), rgb(66, 142, 230))",
        borderRadius: 10,
        margin: 4,
      }}
      searchicon={<Search color={"white"} />}
      arrowicon={<Caret color={"white"} />}
      closeicon={<X color={"white"} />}
    />
  );
};

export default Select;
