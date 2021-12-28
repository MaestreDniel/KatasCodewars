<?php

// https://www.codewars.com/kata/544aed4c4a30184e960010f4

function divisors($integer) {
  $divisor = [];
  for ($x = 2; $x < $integer; $x++) {
    if ($integer % $x == 0) {
      array_push($divisor, $x);
    }
  }
  if (count($divisor) == 0) {
    return "$integer is prime";
  }
  return $divisor;
}

?>