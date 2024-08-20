class purchasePage {
	enterURL() {
		cy.visit(
			"/purchase.php"
		);
	}

}

const purchase = new purchasePage();
export default purchase;