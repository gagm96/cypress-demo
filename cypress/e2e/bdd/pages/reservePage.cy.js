class reservePage {
    enterURL() {
        cy.visit(
            "/reserve.php"
        );
    }

}

const reserve = new reservePage();
export default reserve;