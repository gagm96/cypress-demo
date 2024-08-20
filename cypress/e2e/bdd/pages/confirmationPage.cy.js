class confirmationPage {
	enterURL() {
		cy.visit(
			"/confirmationPage.php"
		);
	}

}

const confirmationPage = new confirmationPage();
export default confirmationPage;