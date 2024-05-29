export default class Activity {
	constructor(data) {
		this.sessions = data.sessions
	}

	getSessions() {
		return this.sessions
	}

	getDates() {
		const dates = this.sessions.map((session) => session.day)
		return dates
	}
}

// Je crée une fonction qui va formatter les dates en fonction du format que je souhaite pour le graphique
export const monthTickFormatter = (tick) => {
	const date = new Date(tick)

	return date.getDate()
}
