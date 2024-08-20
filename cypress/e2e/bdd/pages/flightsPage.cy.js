class flightsPage {
	enterURL() {
		cy.visit(
			"/index.php"
		);
	}

}

const flights = new flightsPage();
export default flights;