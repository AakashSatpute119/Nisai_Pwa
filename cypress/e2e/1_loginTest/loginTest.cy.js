describe("Login Niuhkjddcaskjbncjkascaasbncsavdi web pgfrsg6876age 0001", () => {
  it("Visit Website", () => {
    cy.visit("https://web-orchestrator.dev.nisai.samagra.io/");
    cy.url().should("contain", "web-orchestrator");
    cy.get(".login_input__1LHuO").type(8668727053);
    cy.get(".login_sendOTPButton__7hR8v").click();
    const otp = "abcd";
    otp.split("").forEach((digit, index) => {
      cy.get(`[aria-label="Please enter OTP character ${index + 1}"]`).type(
        digit
      );
    });
    cy.get(".otp-verification_verifyOTPButton__zzJY4").click();
    cy.get(":nth-child(1) > .student-screen_aakalanButton__Pb0FZ").click();
  });
});
