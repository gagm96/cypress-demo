class confirmationPage {
	enterURL() {
		cy.visit(
			"/confirmationPage.php"
		);
	}

}

const confirmation = new confirmationPage();
export default confirmation;