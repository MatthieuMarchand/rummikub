import type { GameInfosDto } from "@rumi/application/entities/Game";
import type { CardPositionOnBoard } from "@rumi/application/entities/GameBoard";
import type {
  ClientToServerEvents,
  ServerToClientEvents,
} from "@rumi/application/io";
import type { GameBoardDto } from "@rumi/domain/dtos/gameBoard";
import type { PlayerDto } from "@rumi/domain/dtos/player";

import { io, Socket } from "socket.io-client";

export const setupSocket = ({
  gameId,
  onPlayerUpdate,
  onGameBoardUpdate,
  onGameInfosUpdate,
}: {
  gameId: string;
  onPlayerUpdate: (player: PlayerDto) => void;
  onGameBoardUpdate: (gameBoard: GameBoardDto) => void;
  onGameInfosUpdate: (game: GameInfosDto) => void;
}) => {
  const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    "ws://localhost:3000",
    { query: { gameId } },
  );

  socket.on("connect", () => {
    console.log("connected");
  });

  socket.on("disconnect", () => {
    console.log("disconnected");
  });

  socket.on("game.infos.update", (game: GameInfosDto) => {
    onGameInfosUpdate(game);
  });

  socket.on("player.update", (player: PlayerDto) => {
    onPlayerUpdate(player);
  });

  socket.on("gameBoard.update", (gameBoard: GameBoardDto) => {
    onGameBoardUpdate(gameBoard);
  });

  socket.on("connect_error", (error) => {
    if (socket.active) {
      // temporary failure, the socket will automatically try to reconnect
    } else {
      // the connection was denied by the server
      // in that case, `socket.connect()` must be manually called in order to reconnect
      console.log(error.message);
    }
  });

  const startGame = () => {
    socket.emit("game.start");
  };

  const cancelTurnModications = () => {
    socket.emit("player.cancelTurnModifications");
  };

  const drawCard = () => {
    socket.emit("player.drawCard");
  };

  const endTurn = () => {
    socket.emit("player.endTurn");
  };

  const moveCardAlone = (source: CardPositionOnBoard) => {
    socket.emit("player.moveCardAlone", source);
  };

  const moveCardToCombination = (
    source: CardPositionOnBoard,
    destination: CardPositionOnBoard,
  ) => {
    socket.emit("player.moveCardToCombination", source, destination);
  };

  const placeCardAlone = (cardIndex: number) => {
    socket.emit("player.placeCardAlone", cardIndex);
  };

  const placeCardInCombination = (
    cardIndex: number,
    destination: CardPositionOnBoard,
  ) => {
    socket.emit("player.placeCardInCombination", cardIndex, destination);
  };

  return {
    socket,
    startGame,
    cancelTurnModications,
    drawCard,
    endTurn,
    moveCardAlone,
    moveCardToCombination,
    placeCardAlone,
    placeCardInCombination,
  };
};
