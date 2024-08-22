class searchPage {
    enterURL() {
        cy.visit(
            "/reserve.php"
        );
    }

    clickSubmitButton() {
        cy.get('[type="submit"]').eq(0).click();
        return this;
    }

}

const search = new searchPage();
export default search;