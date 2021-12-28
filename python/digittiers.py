# https://www.codewars.com/kata/586bca7fa44cfc833e00005c

def create_array_of_tiers(n):
  num = list(map(str, str(n)))
  length = len(num)
  tiers = []
  total = ""
  for i in range(length):
    total += num[i];
    tiers.append(total)
  return tiers