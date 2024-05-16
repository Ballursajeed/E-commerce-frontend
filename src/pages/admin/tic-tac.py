def print_board(board):
    for row in board:
        print(" | ".join(row))
        print("-" * 9)
    

def check_winner(board):
    #checking row
    for row in range(len(board)):
        if board[row][0] == board[row][1] == board[row][2] and board[row][0]!=" ":
            return True
    for col in range(len(board)):
        if board[0][col] == board[1][col] == board[2][col] and board[0][col]!=" ":
            return True
        
    if(board[0][0]==board[1][1]==board[2][2] and board[0][0]!=" "):
        return True
    
    if(board[2][0]==board[1][1]==board[0][2] and board[2][0]!=" "):
        return True

def tic_tac():
    board = [[" " for _ in range(3)] for _ in range(3)]
    player = 'X'
    
    while True:
        print_board(board)
        row = int(input(f"Player {player}: enter row number(0,1,2): "))
        col = int(input(f"Player {player}: enter col number(0,1,2): "))
        
        if(board[row][col]!=" "):
            print("The position is already taken!2, try a different square")
            continue
        
        board[row][col] = player
            
        if(check_winner(board)):
            print_board(board)
            print(f"{player} wins")
            break
        
        if all(board[i][j]!= " " for i in range(3) for j in range(3)):
            print_board(board)
            print("it's a tie")
            break
        
        if(player == "X"):
            player = "O"
        elif player == "O":
            player = "X"
        
        
tic_tac()
