export function getRecipeList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(() => {
        return [
          {
            id: "1",
            title: "Spaghetti",
            category: "Main Course",
            time: "20",
          },
        ];
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
