import type { RequestHandler } from '@sveltejs/kit';

const testScores = [
	{
		id: 0,
		user: 'AKB',
		score: 3040
	},
	{
		id: 1,
		user: 'BTD',
		score: 2342
	},
	{
		id: 2,
		user: 'NIP',
		score: 12343
	},
	{
		id: 3,
		user: 'DFD',
		score: 89997
	},
	{
		id: 4,
		user: 'AAA',
		score: 8
	}
];

export const get: RequestHandler = () => ({
	body: JSON.stringify(testScores),
	status: 200
});

export async function post({ request }) {
	const newScore = await request.json();
	testScores.push(newScore);
	// redirect to the newly created item
	return {
		status: 200,
		body: 'should be db id of newly created'
	};
}
