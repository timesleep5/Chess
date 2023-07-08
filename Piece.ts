class Piece {
    isTaken: boolean;
    currentPosition: number[] = new Array(2);

    readonly STARTPOSITION: number[] = new Array(2);
    readonly MOVEMENTSTYLE: string;
    readonly PLAYER: Player;
    constructor(player: Player, movementStyle: string, startPosition: number[]) {
        this.PLAYER = player;
        this.isTaken = false;
        this.MOVEMENTSTYLE = movementStyle;
        this.STARTPOSITION = startPosition;
        this.currentPosition = startPosition;
    }

    move(newPosition: number[]) {
        this.currentPosition = newPosition;
    }
}