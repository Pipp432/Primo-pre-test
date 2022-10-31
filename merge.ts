function merge(collection_1: number[], collection_2: number[]): number[] {
	// This will be the final array returned
	let mergedCollection: number[] = [];

	// Guard Clauses for empty array cases
	if (collection_1.length === 0 && collection_2.length === 0)
		return collection_1;
	if (collection_1.length === 0) return collection_2;
	if (collection_2.length === 0) return collection_1;

	// Using 2 pointers to iterate over the collections
	let pointer1: number = 0;
	let pointer2: number = 0;

	// Given the 2 collections are sorted
	while (pointer1 < collection_1.length && pointer2 < collection_2.length) {
		if (collection_1[pointer1] < collection_2[pointer2]) {
			mergedCollection.push(collection_1[pointer1]);
			pointer1++;
		} else {
			mergedCollection.push(collection_2[pointer2]);
			pointer2++;
		}
	}

	// These 2 loops are used to psuh the leftovers from the previous loop
	// Only one will run beacuse of the above condition.
	while (pointer1 < collection_1.length) {
		mergedCollection.push(collection_1[pointer1]);
		pointer1++;
	}
	while (pointer2 < collection_2.length) {
		mergedCollection.push(collection_2[pointer2]);
		pointer2++;
	}

	return mergedCollection;
}
export default merge;
