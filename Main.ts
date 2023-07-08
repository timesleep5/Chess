class Main {
    static whitePlayer: Player = new Player('white', 'korbi')
    static blackPlayer: Player = new Player('black', 'tj')
    static whitePieces: Piece[][]
    static blackPieces: Piece[][]

    public static main() {
        Main.whitePieces = Main.initialize('white', Main.whitePlayer)
        Main.blackPieces = Main.initialize('black', Main.blackPlayer)
        console.log(Main.blackPieces)
    }

    private static initialize(color: string, player: Player) {
        let pieces: Piece[][];
        pieces[0] = Main.instantiatePawns(color, player)
        pieces[1] = Main.instantiateRooks(color, player)
        pieces[2] = Main.instatiateKnights(color, player)
        pieces[3] = Main.instatiateBishops(color, player)
        pieces[3] = Main.instatiateQueen(color, player)
        pieces[4] = Main.instatiateKing(color, player)

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
            rooks[0] = new Rook(player, [1, 8])
            rooks[1] = new Rook(player, [8, 8])
        }
        return rooks;
    }

    private static instatiateKnights(color: string, player: Player) {
        let knights: Knight[] = new Array(2)
        if (color === 'white') {
            knights[0] = new Knight(player, [2, 1])
            knights[1] = new Knight(player, [7, 1])
        } else if (color === 'black') {
            knights[0] = new Knight(player, [2, 8])
            knights[1] = new Knight(player, [7, 8])
        }
        return knights;
    }

    private static instatiateBishops(color: string, player: Player) {
        let bishops: Bishop[] = new Array(2)
        if (color === 'white') {
            bishops[0] = new Bishop(player, [3, 1])
            bishops[1] = new Bishop(player, [6, 1])
        } else if (color === 'black') {
            bishops[0] = new Bishop(player, [3, 8])
            bishops[1] = new Bishop(player, [6, 8])
        }
        return bishops;
    }

    private static instatiateQueen(color: string, player: Player) {
        let queen: Queen[] = new Array(1)
        if (color === 'white') {
            queen[0] = new Queen(player, [4, 1])
        } else if (color === 'black') {
            queen[0] = new Bishop(player, [4, 8])
        }
        return queen;
    }

    private static instatiateKing(color: string, player: Player) {
        let king: King[] = new Array(1)
        if (color === 'white') {
            king[0] = new King(player, [5, 1])
        } else if (color === 'black') {
            king[0] = new King(player, [5, 8])
        }
        return king;
    }
}
