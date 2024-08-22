class flightsPage {
	enterURL() {
		cy.visit(
			"/index.php"
		);
	}

	selectCity(direction, city) {
		cy.getByName(`${direction}Port`).select(city);
	}

    clickSubmitButton() {
        cy.get('[type="submit"]').click();
        return this;
    }

}

const flights = new flightsPage();
export default flights;