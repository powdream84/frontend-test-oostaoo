export interface Card {
  currency: string;
  number: string;
  logo: string;
  found: boolean;
}

export interface CardProps {
  currency: string;
  number: string;
  logo: string;
  found: boolean;
  handleClickOnCard: Function;
  firstSelectedCard: SelectedCard;
  secondSelectedCard: SelectedCard;
}

export interface CardsProps {
  gameSituation: Card[];
  firstSelectedCard: SelectedCard;
  secondSelectedCard: SelectedCard;
  handleClickOnCard: Function;
}

export interface ModalProps {
  isOpened: boolean;
  message: string;
}

export interface SelectedCard {
  currency: string;
  number: string;
}
