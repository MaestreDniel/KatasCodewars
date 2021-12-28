# https://www.codewars.com/kata/563e320cee5dddcf77000158

import math
def get_average(marks):
  sum = 0
  length = len(marks)
  i = 0
  for i in range(length):
    sum += marks[i]
    i += i
  return math.floor(sum / len(marks))