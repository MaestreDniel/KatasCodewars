# https://www.codewars.com/kata/515e271a311df0350d00000f

def square_sum(n):
  length = len(n)
  squares = []
  for i in range(length):
    square = n[i]
    square **= 2
    squares.append(square)
  return sum(squares)