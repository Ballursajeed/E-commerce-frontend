from collections import deque

def get_move(board):
    moves = []
    i= board.index(0);
    if i not in [0,1,2]:
        moves.append(("up",i-3))
    if i not in [0,3,6]:
        moves.append(("left",i-1))
    if i not in [2,5,8]:
        moves.append(("right",i+1))
    if i not in [6,7,8]:
        moves.append(("down",i+3))
    return moves

def apply_move(board,move):
    new_state = board[:]
    direction,new_i = move
    zero_i = board.index(0)
    new_state[zero_i],new_state[new_i] = new_state[new_i],new_state[zero_i]
    
    return new_state

def puzzle_solve(initial_state):
    visited = set()
    goal_state = [0,1,2,3,4,5,6,7,8]
    queue = deque([(initial_state,[])])
    
    while queue:
        state,path = queue.popleft()
        if state == goal_state:
            return path
        visited.add(tuple(state))
        for move in get_move(state):
            new_state = apply_move(state,move)
            if tuple(new_state) not in visited:
                queue.append((new_state,path+[move[0]]))
                visited.add(tuple(new_state))
                
                
    return None

initial_state=[1, 2, 3, 4, 0, 5, 6, 7, 8]

solution = puzzle_solve(initial_state)

if solution:
    print(f"solution found in {len(solution)} steps:")
    for step, move in enumerate(solution,start=1):
        print(f"step {step}:{move}")
        
                
        
        
    
    