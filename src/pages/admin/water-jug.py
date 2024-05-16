from collections import deque

# Function to find all possible moves
def get_moves(jug1, jug2, capacities):
    moves = []
    max_jug1, max_jug2 = capacities
    # Fill jug1
    moves.append(('Fill Jug 1', max_jug1, jug2))
    # Fill jug2
    moves.append(('Fill Jug 2', jug1, max_jug2))
    # Empty jug1
    moves.append(('Empty Jug 1', 0, jug2))
    # Empty jug2
    moves.append(('Empty Jug 2', jug1, 0))
    # Pour from jug1 to jug2
    pour_amount = min(jug1, max_jug2 - jug2)
    moves.append(('Pour from Jug 1 to Jug 2', jug1 - pour_amount, jug2 + pour_amount))
    # Pour from jug2 to jug1
    pour_amount = min(jug2, max_jug1 - jug1)
    moves.append(('Pour from Jug 2 to Jug 1', jug1 + pour_amount, jug2 - pour_amount))
    return moves

# Breadth-first search
def solve_water_jug_problem(capacities, target):
    jug1, jug2 = 0, 0
    visited = set()
    queue = deque([(jug1, jug2, [])])

    while queue:
        jug1, jug2, path = queue.popleft()
        if jug1 == target or jug2 == target:
            return path
        visited.add((jug1, jug2))
        for move, new_jug1, new_jug2 in get_moves(jug1, jug2, capacities):
            if (new_jug1, new_jug2) not in visited:
                queue.append((new_jug1, new_jug2, path + [move]))
                visited.add((new_jug1, new_jug2))
    return None

# Example usage
capacities = (5, 3)  # Capacity of jug1, jug2
target = 4  # Target amount of water
solution = solve_water_jug_problem(capacities, target)

if solution:
    print("Solution found in {} steps:".format(len(solution)))
    for step, move in enumerate(solution, start=1):
        print("Step {}: {}".format(step, move))
else:
    print("No solution found.")