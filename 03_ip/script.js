function calculateVolumeAndArea(length) {
	if (typeof length !== "number" || length < 0 || !Number.isInteger(length)) {
		return "Error";
	}

	let volume = 0,
		area = 0;

	volume = length * length * length;

	area = 6 * (length * length);

	return `Kubo turis: ${volume}, visu pavirsiu plotas: ${area}`;
}

calculateVolumeAndArea(5);

function getCoupeNumber(seatNumber) {
	if (
		typeof seatNumber !== "number" ||
		seatNumber < 0 ||
		!Number.isInteger(seatNumber)
	) {
		return "Error";
	}

	if (seatNumber === 0 || seatNumber > 36) {
		return "It's don't exist";
	}

	return Math.ceil(seatNumber / 4);
}

getCoupeNumber(33);
