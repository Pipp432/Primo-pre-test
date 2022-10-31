import merge from "./merge";

test("merge empty collections", () => {
	expect(merge([], [])).toEqual([]);
});
test("merge only one collection with elements", () => {
	expect(merge([], [1, 2, 4, 6, 7])).toEqual([1, 2, 4, 6, 7]);
	expect(merge([1, 2, 4, 6, 7], [])).toEqual([1, 2, 4, 6, 7]);
});
test("merge two collections with elements", () => {
	expect(merge([1, 2, 3, 5, 6, 7], [1, 2, 4, 6, 7])).toEqual([
		1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 7,
	]);
});
