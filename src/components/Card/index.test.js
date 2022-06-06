import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "./Card";
import btcLogo from "../../assets/logos/btc.png";
import ethLogo from "../../assets/logos/eth.png";

describe("Card", () => {
  test("Test card 1", async () => {
    render(
      <Card
        currency="BTC"
        number="1"
        logo={btcLogo}
        found={false}
        handleClickOnCard={Card.handleClickOnCard}
        firstSelectedCard={{ currency: "BTC", number: "2" }}
        secondSelectedCard={{ currency: "BTC", number: "1" }}
      />
    );
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", expect.stringMatching("btc.png"));
    expect(image.classList.contains("hidden")).not.toBe(true);
  });

  test("Test card 2", async () => {
    render(
      <Card
        currency="ETH"
        number="1"
        logo={ethLogo}
        found={false}
        handleClickOnCard={Card.handleClickOnCard}
        firstSelectedCard={{ currency: "BTC", number: "2" }}
        secondSelectedCard={{ currency: "BTC", number: "1" }}
      />
    );
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image.classList.contains("hidden")).toBe(true);
  });
});
