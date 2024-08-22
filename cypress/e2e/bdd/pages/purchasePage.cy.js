class purchasePage {
	enterURL() {
		cy.visit(
			"/purchase.php"
		);
	}

    clickSubmitButton() {
        cy.get('[type="submit"]').click();
        return this;
    }

}

const purchase = new purchasePage();
export default purchase;