class Main {
    static whitePieces: Piece[]
    static blackPieces: Piece[]
    static whitePlayer: Player = new Player('white', 'korbi')
    static blackPlayer: Player = new Player('black', 'tj')
    static whitePieces: Piece[][]
    static blackPieces: Piece[][]

    public static main() {
        Main.whitePieces = Main.initialize('white')
        Main.blackPieces = Main.initialize('black')
    }

    private static initialize(color: string) {
        let pieces: Piece[][];
        pieces[0] = Main.instantiatePawns(color, Main.whitePlayer)
        pieces[1] = Main.instantiateRooks(color, Main.whitePlayer)

        return pieces
    }

    private static instantiatePawns(color: string, player: Player) {
        let pawns: Pawn[] = new Array(8)

        for (let i: number = 0; i < pawns.length; i++) {
            let startPosition: number[]

            if (color === 'white') {
                startPosition = [i+1, 2]
            } else if (color === 'black') {
                startPosition = [i+1, 7]
            }
            pawns[i] = new Pawn(player, startPosition)
        }
        return pawns
    }

    private static instantiateRooks(color: string, player: Player) {
        let rooks: Rook[] = new Array(2)
        if (color === 'white') {
            rooks[0] = new Rook(player, [1, 1])
            rooks[1] = new Rook(player, [8, 1])
        } else if (color === 'black') {

        }
        return rooks;
    }
}
