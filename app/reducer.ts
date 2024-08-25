enum ActionTypes {
  ADD_ITEM = "ADD_ITEM",
  DELETE_ITEM = "DELETE_ITEM",
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

type Action = {
  type: ActionTypes;
  payload: Number;
};

type State = {
  builds: { id: number; count: number }[];
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case "ADD_ITEM":
      let has = state.builds.some((el) => el.id === action.payload);

      return has
        ? {
            builds: state.builds.map((el) => {
              if (el.id === action.payload) el.count++;
              return el;
            }),
          }
        : {
            builds: [...state.builds, { id: action.payload, count: 1 }],
          };

    case "DELETE_ITEM":
      return {
        builds: state.builds.filter((el) => el.id !== action.payload),
      };

    case "INCREMENT":
      return {
        builds: state.builds.map((el) => {
          if (el.id === action.payload) el.count++;
          return el;
        }),
      };

    case "DECREMENT":
      let count = state.builds.find((el) => el.id === action.payload).count;

      return count > 0
        ? {
            builds: state.builds.map((el) => {
              if (el.id === action.payload && el.count > 0) el.count--;
              return el;
            }),
          }
        : {
            builds: state.builds.filter((el) => el.id !== action.payload),
          };
  }
}
