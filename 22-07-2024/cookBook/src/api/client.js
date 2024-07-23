export function getRecipeList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(() => {
        return [
          {
            id: "1",
            title: "Spaghetti",
            category: "Main Course",
            time: "20min",
          },
          {
            id: "2",
            title: "Pancakes",
            category: "Breakfast",
            time: "2-3min",
          },
        ];
      });
    }, 2000);
  });
}

export function getRecipeDetails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject({ message: "This is a error message!" });
      resolve(() => {
        return {
          id: "1",
          title: "Spaghetti",
          category: "Main Course",
          time: "20min",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image:
            "https://www.twopeasandtheirpod.com/wp-content/uploads/2023/05/Spaghetti-2224.jpg",
        };
      });
    }, 2000);
  });
}

// with api
/* export const getBookList = async () => {
	try {

		const res = await fetch("https://jsonplaceholde.typicode.com/users");
		return res.json()

	} catch (error) {
		throw new Error("Error:", error)

	}
};  */
